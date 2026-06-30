import { NextResponse } from 'next/server';

// Web Crypto API — available in the Edge Runtime (unlike Node's 'crypto' module)
async function getSessionToken() {
  const encoder = new TextEncoder();
  const data = encoder.encode(process.env.ADMIN_PASSWORD + process.env.SUPABASE_PUBLISHABLE_DEFAULT_KEY);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hashBuffer))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
}

async function isAdminAuthenticated(request) {
  if (!process.env.ADMIN_PASSWORD) return false;
  const session = request.cookies.get('admin-session')?.value;
  if (!session) return false;
  return session === await getSessionToken();
}

export async function middleware(request) {
  const { pathname, search } = request.nextUrl;

  // Public URL lowercasing (skip admin, API, _next, static files)
  if (
    pathname !== pathname.toLowerCase() &&
    !pathname.startsWith('/_next') &&
    !pathname.startsWith('/api') &&
    !pathname.startsWith('/admin') &&
    !pathname.includes('.')
  ) {
    const lowercaseUrl = new URL(pathname.toLowerCase() + search, request.url);
    return NextResponse.redirect(lowercaseUrl, 301);
  }

  // Redirect /admin → /admin/dashboard
  if (pathname === '/admin' || pathname === '/admin/') {
    return NextResponse.redirect(new URL('/admin/dashboard', request.url));
  }

  // Admin auth protection
  if (pathname.startsWith('/admin')) {
    const authenticated = await isAdminAuthenticated(request);

    if (pathname === '/admin/login') {
      // Already logged in — go to dashboard
      if (authenticated) {
        return NextResponse.redirect(new URL('/admin/dashboard', request.url));
      }
      return NextResponse.next();
    }

    // Not logged in — go to login
    if (!authenticated) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|woff|woff2)$).*)'],
};
