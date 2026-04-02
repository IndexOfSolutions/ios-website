import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname, search } = request.nextUrl;

  // 1. Check if the path has uppercase letters
  // 2. Ignore Next.js internals, API routes, and static files (with dots)
  if (
    pathname !== pathname.toLowerCase() &&
    !pathname.startsWith('/_next') &&
    !pathname.startsWith('/api') &&
    !pathname.includes('.')
  ) {
    // Create the lowercase URL while preserving query parameters (like ?rsc=...)
    const lowercaseUrl = new URL(
      pathname.toLowerCase() + search, 
      request.url
    );
    
    return NextResponse.redirect(lowercaseUrl, 301);
  }

  return NextResponse.next();
}