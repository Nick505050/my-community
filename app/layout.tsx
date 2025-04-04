import './globals.css'
import { ReactNode } from 'react'
import { SupabaseProvider } from '@/context/SupabaseProvider'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'Community Platform',
  description: 'Stay connected anytime.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <SupabaseProvider>
          <Navbar />
          <main>{children}</main>
        </SupabaseProvider>
      </body>
    </html>
  )
}