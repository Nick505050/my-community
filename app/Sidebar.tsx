// app/Sidebar.tsx
import React from 'react';
import Link from 'next/link';

const Sidebar: React.FC = () => {
  return (
    <aside className="hidden md:block w-64 bg-[var(--secondary)] p-4 border-r border-gray-200 dark:border-gray-700">
      <h2 className="text-lg font-semibold mb-4">Communities</h2>
      <ul className="space-y-2">
        <li>
          <Link href="/communities/general" className="hover:text-[var(--accent-hover)]">
            General
          </Link>
        </li>
        <li>
          <Link
            href="/communities/technology"
            className="hover:text-[var(--accent-hover)]">
            Technology
          </Link>
        </li>
        <li>
          <Link href="/communities/gaming" className="hover:text-[var(--accent-hover)]">
            Gaming
          </Link>
        </li>
        <li>
          <Link href="/communities/arts" className="hover:text-[var(--accent-hover)]">
            Arts
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;