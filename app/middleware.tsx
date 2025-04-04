import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // For example, we’re using a cookie named 'token' to determine authentication.
  const token = request.cookies.get('token');

  // If the user is not authenticated and is not on the login page, redirect to /login.
  if (!token && request.nextUrl.pathname !== '/login') {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // If the user is authenticated and is on the login page, redirect to /dashboard.
  if (token && request.nextUrl.pathname === '/login') {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}