"use client";

import React, { useState, FormEvent } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { FaBars, FaUserCircle } from 'react-icons/fa';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [postContent, setPostContent] = useState('');
  const [posts, setPosts] = useState<string[]>([]);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (postContent.trim() === '') return;
    // Debug: log the post content to the console
    console.log("Posting:", postContent);
    setPosts((prevPosts) => [postContent, ...prevPosts]);
    setPostContent('');
  };

  return (
    <>
      <Head>
        <title>Dashboard - Modern Website</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <aside className={`${sidebarOpen ? "w-64" : "w-16"} bg-white shadow-lg transition-all duration-300`}>
          <div className="flex items-center justify-between p-4">
            {sidebarOpen && <span className="text-xl font-bold">Dashboard</span>}
            <button onClick={toggleSidebar} className="text-gray-600 focus:outline-none">
              <FaBars />
            </button>
          </div>
          <nav className="mt-4">
            <ul>
              <li>
                <Link href="/dashboard" className="flex items-center p-4 hover:bg-gray-200">
                  <span className="text-lg">Home</span>
                  {sidebarOpen && <span className="ml-2">Dashboard</span>}
                </Link>
              </li>
              <li>
                <Link href="/profile" className="flex items-center p-4 hover:bg-gray-200">
                  <span className="text-lg">
                    <FaUserCircle />
                  </span>
                  {sidebarOpen && <span className="ml-2">Profile</span>}
                </Link>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          <header className="bg-white shadow p-4 flex justify-between items-center">
            <h1 className="text-2xl font-semibold">Dashboard</h1>
            <div className="flex items-center space-x-4">
              <input 
                type="text" 
                placeholder="Search..." 
                className="border rounded-full py-1 px-3 focus:outline-none" 
              />
              <Link href="/profile" className="flex items-center">
                <FaUserCircle className="text-3xl" />
              </Link>
            </div>
          </header>

          <main className="p-6 overflow-auto">
            {/* Posting Functionality */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Create a New Post</h2>
              <form onSubmit={handleSubmit}>
                <textarea
                  value={postContent}
                  onChange={(e) => setPostContent(e.target.value)}
                  placeholder="What's on your mind?"
                  className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={4}
                ></textarea>
                <button 
                  type="submit" 
                  className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                >
                  Post
                </button>
              </form>
            </section>

            {/* List of Posts */}
            <section>
              <h2 className="text-xl font-semibold mb-4">Recent Posts</h2>
              {posts.length === 0 ? (
                <p className="text-gray-500">No posts yet. Start posting!</p>
              ) : (
                <ul className="space-y-4">
                  {posts.map((post, index) => (
                    <li key={index} className="bg-white p-4 rounded-lg shadow">
                      <p>{post}</p>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default Dashboard;