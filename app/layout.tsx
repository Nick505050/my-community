"use client";

import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <Head>
        <title>Modern Website</title>
        <meta name="description" content="A modern website designed with responsive and accessible components." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div className="flex-shrink-0">
                <Link href="/" className="text-2xl font-bold text-gray-800">
                  Logo
                </Link>
              </div>
              <nav>
                {/* Desktop Navigation */}
                <ul className="hidden md:flex space-x-10">
                  <li>
                    <Link href="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-base font-medium text-gray-500 hover:text-gray-900">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="text-base font-medium text-gray-500 hover:text-gray-900">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-base font-medium text-gray-500 hover:text-gray-900">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link href="/dashboard" className="text-base font-medium text-gray-500 hover:text-gray-900">
                      Dashboard
                    </Link>
                  </li>
                </ul>
                {/* Mobile Navigation */}
                <div className="md:hidden">
                  <button
                    type="button"
                    className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              </nav>
            </div>
          </div>
          {/* Mobile Menu (static for now; can be expanded with state as needed) */}
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                Home
              </Link>
              <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                About
              </Link>
              <Link href="/services" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                Services
              </Link>
              <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                Contact
              </Link>
              <Link href="/dashboard" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                Dashboard
              </Link>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-800">
          <div className="container mx-auto px-4 py-6">
            <p className="text-center text-white text-sm">
              © {new Date().getFullYear()} Modern Website. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
};

export default Layout;