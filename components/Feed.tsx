// components/Feed.tsx
'use client'

type Post = {
  id: number
  title: string
  description: string
  createdAt: string
}

const mockPosts: Post[] = [
  {
    id: 1,
    title: 'Welcome to Our Brand New Website',
    description: 'Check out our latest features and improvements.',
    createdAt: '2025-04-04',
  },
  {
    id: 2,
    title: 'Another Post',
    description: 'Just another post in your feed!',
    createdAt: '2025-04-02',
  },
]

export default function Feed() {
  return (
    <div className="grid gap-6">
      {mockPosts.map((post) => (
        <article
          key={post.id}
          className="p-4 bg-white dark:bg-gray-800 shadow rounded"
        >
          <h2 className="text-lg font-bold mb-2">{post.title}</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {post.description}
          </p>
          <p className="mt-2 text-xs text-gray-400">
            Posted on {new Date(post.createdAt).toLocaleDateString()}
          </p>
        </article>
      ))}
    </div>
  )
}