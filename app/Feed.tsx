// app/feed.tsx
import React, { useEffect, useState } from 'react';
import Layout from './layout';
import Link from 'next/link';

type Post = {
  id: string;
  title: string;
  content: string;
  author: string;
  created_at: string;
};

const Feed: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // Replace with your Supabase fetch call
    async function fetchPosts() {
      // Simulated fetch
      const data: Post[] = [
        { id: '1', title: 'Welcome to the Community!', content: 'Introduce yourself here.', author: 'Admin', created_at: new Date().toISOString() },
        { id: '2', title: 'Latest Update', content: 'We have launched new features!', author: 'Moderator', created_at: new Date().toISOString() },
      ];
      setPosts(data);
    }
    fetchPosts();
  }, []);

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Community Feed</h1>
        <div className="space-y-4">
          {posts.map((post) => (
            <div key={post.id} className="bg-[var(--secondary)] p-4 rounded shadow">
              <Link href={`/post/${post.id}`}>
                <a className="text-2xl font-semibold hover:text-[var(--accent-hover)]">{post.title}</a>
              </Link>
              <p className="mt-2 text-sm">{post.content}</p>
              <div className="mt-4 text-xs text-gray-500">
                Posted by {post.author} on {new Date(post.created_at).toLocaleDateString()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Feed;