// app/layout.tsx
import './globals.css'
import Link from 'next/link'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Community Platform',
  description: 'A community space for stay-at-home parents and partners',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* You can add meta tags, fonts, etc. here */}
      </head>
      <body className="bg-gray-50">
        <nav className="bg-blue-600 shadow">
          <div className="container mx-auto flex justify-between items-center p-4">
            <Link href="/">
              <span className="text-white font-bold text-2xl">Community</span>
            </Link>
            <div className="flex space-x-2">
              <Link href="/">
                <span className="px-3 py-2 rounded text-blue-200 hover:bg-blue-600 hover:text-white transition">
                  Home
                </span>
              </Link>
              <Link href="/dashboard">
                <span className="px-3 py-2 rounded text-blue-200 hover:bg-blue-600 hover:text-white transition">
                  Dashboard
                </span>
              </Link>
              <Link href="/login">
                <span className="px-3 py-2 rounded text-blue-200 hover:bg-blue-600 hover:text-white transition">
                  Login
                </span>
              </Link>
            </div>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  )
}