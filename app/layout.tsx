// app/layout.tsx
import './globals.css'
import { ReactNode } from 'react'
import { SupabaseProvider } from '@/context/SupabaseProvider'
import Navbar from './Navbar';
import Sidebar from './Sidebar';

export const metadata = {
  title: 'Community Platform',
  description: 'A full-featured community platform with user-generated content',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[var(--background)] text-[var(--foreground)]">
        <SupabaseProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex flex-1">
              {/* Optional sidebar for communities */}
              {/* <Sidebar /> */}
              <main className="flex-1 p-4">{children}</main>
            </div>
          </div>
        </SupabaseProvider>
      </body>
    </html>
  );
}