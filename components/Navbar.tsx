'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Home' },
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/login', label: 'Login' },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="bg-blue-600 shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-white font-bold text-3xl">
          Community
        </Link>
        <div className="flex space-x-3">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <span
                className={`px-4 py-2 rounded transition ${
                  pathname === link.href
                    ? 'bg-blue-800 text-white'
                    : 'text-blue-100 hover:bg-blue-700 hover:text-white'
                }`}
              >
                {link.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}