import { NextResponse } from 'next/server';
import { createHash } from 'crypto';

function getSessionToken() {
  return createHash('sha256')
    .update(process.env.ADMIN_PASSWORD + process.env.SUPABASE_PUBLISHABLE_DEFAULT_KEY)
    .digest('hex');
}

function isAdminAuthenticated(request) {
  const session = request.cookies.get('admin-session')?.value;
  return !!process.env.ADMIN_PASSWORD && session === getSessionToken();
}

export function middleware(request) {
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
    const authenticated = isAdminAuthenticated(request);

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
