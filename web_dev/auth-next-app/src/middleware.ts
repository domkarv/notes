import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isAuthenticationPath = path === '/login' || path === '/signup';
  const token = request.cookies.get('token');

  if (isAuthenticationPath) {
    if (token)
      return NextResponse.redirect(new URL('/profile', request.nextUrl));
  }

  if (!isAuthenticationPath) {
    if (!token)
      return NextResponse.redirect(new URL('/login', request.nextUrl));
  }
  /* we can also write conditions like this: */
  // if (isAuthenticationPath && token) {
  //   return NextResponse.redirect(new URL('/profile', request.nextUrl));
  // }
}

export const config = {
  matcher: ['/', '/login', '/signup', '/profile', '/profile/:path*'],
};
