'use server';

import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { createHash } from 'crypto';

// Derives a stable session token from the admin password + anon key as a salt.
// Changing ADMIN_PASSWORD instantly invalidates all existing sessions.
function getSessionToken() {
  return createHash('sha256')
    .update(process.env.ADMIN_PASSWORD + process.env.SUPABASE_PUBLISHABLE_DEFAULT_KEY)
    .digest('hex');
}

export async function signIn(formData) {
  const password = formData.get('password');

  if (!process.env.ADMIN_PASSWORD || password !== process.env.ADMIN_PASSWORD) {
    redirect('/admin/login?error=Invalid+password');
  }

  const cookieStore = await cookies();
  cookieStore.set('admin-session', getSessionToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 8, // 8 hours
    path: '/',
  });

  redirect('/admin/dashboard');
}

export async function signOut() {
  const cookieStore = await cookies();
  cookieStore.delete('admin-session');
  redirect('/admin/login');
}

export function isAuthenticated(request) {
  const session = request.cookies.get('admin-session')?.value;
  return session === getSessionToken();
}

export async function addBlog(formData) {
  const supabase = await createClient();

  const blog = {
    title: formData.get('title'),
    type: formData.get('type'),
    excerpt: formData.get('excerpt'),
    body: formData.get('body'),
    link: formData.get('link'),
    imageURL: formData.get('imageURL') || null,
    imageALT: formData.get('imageALT') || null,
    author: formData.get('author'),
    date: formData.get('date'),
  };

  const { error } = await supabase.from('Blogs').insert([blog]);

  if (error) {
    redirect('/admin/dashboard?error=' + encodeURIComponent(error.message));
  }

  revalidatePath('/admin/dashboard');
  revalidatePath('/blogs');
  redirect('/admin/dashboard?success=Blog+added+successfully');
}

export async function deleteBlog(id) {
  const supabase = await createClient();
  const { error } = await supabase.from('Blogs').delete().eq('id', id);

  if (error) {
    redirect('/admin/dashboard?error=' + encodeURIComponent(error.message));
  }

  revalidatePath('/admin/dashboard');
  revalidatePath('/blogs');
  redirect('/admin/dashboard?success=Blog+deleted+successfully');
}
