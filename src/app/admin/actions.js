'use server';

import { createClient as createSupabaseClient } from '@supabase/supabase-js';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { createHash } from 'crypto';

// Session token — derived server-side using Node crypto (not Edge Runtime)
function getSessionToken() {
  return createHash('sha256')
    .update(process.env.ADMIN_PASSWORD + process.env.SUPABASE_PUBLISHABLE_DEFAULT_KEY)
    .digest('hex');
}

// Service role client — bypasses RLS for all admin writes
function getAdminClient() {
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_PUBLISHABLE_DEFAULT_KEY;
  return createSupabaseClient(
    process.env.SUPABASE_URL,
    key,
    { auth: { autoRefreshToken: false, persistSession: false } }
  );
}

async function uploadImage(imageFile) {
  if (!imageFile || imageFile.size === 0) return { url: null, error: null };

  const adminClient = getAdminClient();
  const ext = imageFile.name.split('.').pop().toLowerCase();
  const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

  const { error } = await adminClient.storage
    .from('BlogsImages')
    .upload(fileName, imageFile, { contentType: imageFile.type, upsert: false });

  if (error) return { url: null, error: error.message };

  const { data: { publicUrl } } = adminClient.storage
    .from('BlogsImages')
    .getPublicUrl(fileName);

  return { url: publicUrl, error: null };
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
    maxAge: 60 * 60 * 8,
    path: '/',
  });

  redirect('/admin/dashboard');
}

export async function signOut() {
  const cookieStore = await cookies();
  cookieStore.delete('admin-session');
  redirect('/admin/login');
}

export async function addBlog(formData) {
  const adminClient = getAdminClient();
  const link = formData.get('link');

  // Guard: prevent duplicate slug (catches double-submissions)
  const { data: existing } = await adminClient
    .from('Blogs')
    .select('id')
    .eq('link', link)
    .maybeSingle();

  if (existing) return { error: `A blog post with the slug "${link}" already exists.` };

  const imageFile = formData.get('imageFile');
  const { url: imageURL, error: imageError } = await uploadImage(imageFile);
  if (imageError) return { error: `Image upload failed: ${imageError}` };

  const blog = {
    title: formData.get('title'),
    type: formData.get('type'),
    excerpt: formData.get('excerpt'),
    body: formData.get('body'),
    link,
    imageURL,
    imageALT: formData.get('imageALT') || null,
    author: formData.get('author'),
    date: formData.get('date'),
  };

  const { error } = await adminClient.from('Blogs').insert([blog]);

  if (error) return { error: error.message };

  revalidatePath('/admin/dashboard');
  revalidatePath('/blogs', 'layout');
  return { success: true };
}

export async function updateBlog(id, formData) {
  const adminClient = getAdminClient();

  let imageURL = formData.get('existingImageURL') || null;
  const imageFile = formData.get('imageFile');
  const { url: newUrl, error: imageError } = await uploadImage(imageFile);
  if (imageError) return { error: `Image upload failed: ${imageError}` };
  if (newUrl) imageURL = newUrl;

  const updates = {
    title: formData.get('title'),
    type: formData.get('type'),
    excerpt: formData.get('excerpt'),
    body: formData.get('body'),
    link: formData.get('link'),
    imageURL,
    imageALT: formData.get('imageALT') || null,
    author: formData.get('author'),
    date: formData.get('date'),
  };

  const { error } = await adminClient.from('Blogs').update(updates).eq('id', id);

  if (error) return { error: error.message };

  revalidatePath('/admin/dashboard');
  revalidatePath('/blogs', 'layout');
  return { success: true };
}

export async function deleteBlog(id) {
  const adminClient = getAdminClient();
  const { error } = await adminClient.from('Blogs').delete().eq('id', id);

  if (error) return { error: error.message };

  revalidatePath('/admin/dashboard');
  revalidatePath('/blogs');
  return { success: true };
}
