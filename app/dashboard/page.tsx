// app/dashboard/page.tsx
'use client'

import { useEffect, useState } from 'react'
import { createClient, Session } from '@supabase/supabase-js'
import { useRouter } from 'next/navigation'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

type Post = {
  id: string
  content: string
  created_at: string
  user_id: string
}

export default function Dashboard() {
  const [session, setSession] = useState<Session | null>(null)
  const [posts, setPosts] = useState<Post[]>([])
  const [newPost, setNewPost] = useState('')
  const [loadingPosts, setLoadingPosts] = useState(true)
  const router = useRouter()

  // Check if user is authenticated; if not, redirect to login.
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        setSession(session)
      } else {
        router.push('/login')
      }
    })
  }, [router])

  // Fetch posts and subscribe to new posts in realtime.
  useEffect(() => {
    const fetchPosts = async () => {
      setLoadingPosts(true)
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false })
      if (!error && data) {
        setPosts(data as Post[])
      }
      setLoadingPosts(false)
    }
    fetchPosts()

    const subscription = supabase
      .channel('public:posts')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'posts' },
        (payload) => {
          setPosts((prevPosts) => [payload.new as Post, ...prevPosts])
        }
      )
      .subscribe()

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  const handlePost = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newPost.trim() || !session) return

    const { error } = await supabase
      .from('posts')
      .insert({ content: newPost, user_id: session.user.id })
    if (!error) {
      setNewPost('')
      // New post will appear via realtime subscription.
    }
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push('/login')
  }

  return (
    <main className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <button
            onClick={handleSignOut}
            className="mt-4 sm:mt-0 bg-red-500 text-white px-5 py-2 rounded hover:bg-red-600 transition"
          >
            Sign Out
          </button>
        </div>
        <form onSubmit={handlePost} className="mb-8">
          <textarea
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            placeholder="What's on your mind?"
            className="w-full p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={3}
            required
          />
          <button type="submit" className="mt-3 bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
            Post
          </button>
        </form>
        <section className="space-y-4 overflow-y-auto max-h-[60vh]">
          {loadingPosts ? (
            <p className="text-center text-gray-600">Loading posts...</p>
          ) : posts.length === 0 ? (
            <p className="text-center text-gray-600">No posts yet. Be the first to share!</p>
          ) : (
            posts.map((post) => (
              <div key={post.id} className="bg-white p-6 rounded-lg shadow">
                <p className="text-gray-800">{post.content}</p>
                <p className="text-xs text-gray-500 mt-2">
                  {new Date(post.created_at).toLocaleString()}
                </p>
              </div>
            ))
          )}
        </section>
      </div>
    </main>
  )
}