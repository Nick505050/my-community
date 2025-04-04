// app/Navbar.tsx
import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <header className="bg-[var(--background)] shadow px-4 py-3 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <Link href="/">
          <a className="text-2xl font-bold">Community</a>
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="/feed">
            <a className="hover:text-[var(--accent-hover)]">Feed</a>
          </Link>
          <Link href="/communities">
            <a className="hover:text-[var(--accent-hover)]">Communities</a>
          </Link>
          <Link href="/explore">
            <a className="hover:text-[var(--accent-hover)]">Explore</a>
          </Link>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <input 
          type="text" 
          placeholder="Search…" 
          className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
        />
        <button aria-label="Notifications" className="relative">
          {/* Notification Icon (SVG) */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" 
            viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500" />
        </button>
        <Link href="/profile">
          <a>
            <img 
              src="/avatar-placeholder.png" 
              alt="User Avatar" 
              className="w-8 h-8 rounded-full border"
            />
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;