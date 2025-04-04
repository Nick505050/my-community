"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // For App Router; if using Pages Router, change to: import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

const LoginPage = () => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsAuthenticated(true);
      router.push('/dashboard');
    }
  }, [router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted with:", { email, password });
    setError('');
    setIsSubmitting(true);

    // For demo purposes, any credentials work.
    setTimeout(() => {
      localStorage.setItem('authToken', 'dummy-token');
      console.log("Redirecting to /dashboard");
      router.push('/dashboard');
      setIsSubmitting(false);
    }, 1000);
  };

  if (isAuthenticated) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>Login - Modern Website</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="flex h-screen items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold mb-4">Login</h1>
          {error && (
            <div className="mb-4 text-red-600">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                placeholder="Enter your password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Logging in...' : 'Login'}
            </button>
          </form>
          <div className="mt-4 text-center text-gray-600">
            For demo: use any email and password.<br />Alternatively, use "user@example.com" and "password".
          </div>
          <div className="mt-4 text-center">
            <Link href="/signup" className="text-blue-600 hover:underline">
              Don’t have an account? Sign up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;