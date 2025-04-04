// app/layout.tsx
import './globals.css'
import { ReactNode } from 'react'
import { SupabaseProvider } from '@/context/SupabaseProvider'
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <SupabaseProvider>
      <div className="min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)]">
        <Navbar />
        <div className="flex flex-1">
          {/* Optional sidebar for community navigation */}
          <Sidebar />
          <main className="flex-1 p-4">
            {children}
          </main>
        </div>
      </div>
    </SupabaseProvider>
  );
};

export default Layout;