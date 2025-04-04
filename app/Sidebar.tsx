// app/Sidebar.tsx
import React from 'react';
import Link from 'next/link';

const Sidebar: React.FC = () => {
  return (
    <aside className="hidden md:block w-64 bg-[var(--secondary)] p-4 border-r border-gray-200 dark:border-gray-700">
      <h2 className="text-lg font-semibold mb-4">Communities</h2>
      <ul className="space-y-2">
        <li>
          <Link href="/communities/general">
            <a className="hover:text-[var(--accent-hover)]">General</a>
          </Link>
        </li>
        <li>
          <Link href="/communities/technology">
            <a className="hover:text-[var(--accent-hover)]">Technology</a>
          </Link>
        </li>
        <li>
          <Link href="/communities/gaming">
            <a className="hover:text-[var(--accent-hover)]">Gaming</a>
          </Link>
        </li>
        <li>
          <Link href="/communities/arts">
            <a className="hover:text-[var(--accent-hover)]">Arts</a>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;