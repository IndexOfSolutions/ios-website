'use client';

import { updateBlog } from '../actions';
import { useState } from 'react';

const inputClass = 'w-full px-4 py-3 bg-[#18181b] border border-[#3f3f46] rounded-lg text-[#F1F1F1] font-[inter] placeholder-[#52525b] outline-none focus:border-[#3b82f6] transition-colors text-sm';
const labelClass = 'text-[#F1F1F1] text-sm font-[inter] font-medium';

export default function EditBlogModal({ blog }) {
  const [open, setOpen] = useState(false);
  const [pending, setPending] = useState(false);
  const [preview, setPreview] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setPending(true);
    const formData = new FormData(e.target);
    await updateBlog(blog.id, formData);
    setPending(false);
  }

  return (
    <>
      <button
        type='button'
        onClick={() => setOpen(true)}
        className='px-3 py-1.5 text-xs font-[inter] text-[#3b82f6] border border-[#3b82f6]/30 rounded-lg hover:bg-[#3b82f6]/10 transition-colors cursor-pointer'
      >
        Edit
      </button>

      {open && (
        <div className='fixed inset-0 bg-black/75 z-50 flex items-start justify-center overflow-y-auto p-4 pt-10'>
          <div className='bg-[#27272a] border border-[#3f3f46] rounded-xl p-6 w-full max-w-3xl mb-10'>
            <div className='flex items-center justify-between mb-6'>
              <h2 className='text-xl font-[newake] text-[#F1F1F1]'>Edit Blog Post</h2>
              <button type='button' onClick={() => { setOpen(false); setPreview(null); }} className='text-[#71717a] hover:text-[#F1F1F1] transition-colors text-xl cursor-pointer'>✕</button>
            </div>

            <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
              {/* Carry the existing image URL through so we can keep it if no new file is selected */}
              <input type='hidden' name='existingImageURL' defaultValue={blog.imageURL || ''} />

              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='flex flex-col gap-2'>
                  <label className={labelClass}>Title *</label>
                  <input type='text' name='title' defaultValue={blog.title} required className={inputClass} />
                </div>
                <div className='flex flex-col gap-2'>
                  <label className={labelClass}>Slug (link) *</label>
                  <input type='text' name='link' defaultValue={blog.link} required className={inputClass} />
                </div>
                <div className='flex flex-col gap-2'>
                  <label className={labelClass}>Type / Category *</label>
                  <input type='text' name='type' defaultValue={blog.type} required className={inputClass} />
                </div>
                <div className='flex flex-col gap-2'>
                  <label className={labelClass}>Author *</label>
                  <input type='text' name='author' defaultValue={blog.author} required className={inputClass} />
                </div>
                <div className='flex flex-col gap-2'>
                  <label className={labelClass}>Date *</label>
                  <input type='date' name='date' defaultValue={blog.date} required className={inputClass} />
                </div>
                <div className='flex flex-col gap-2'>
                  <label className={labelClass}>Image Alt Text</label>
                  <input type='text' name='imageALT' defaultValue={blog.imageALT || ''} placeholder='Descriptive alt text' className={inputClass} />
                </div>
                <div className='flex flex-col gap-2 md:col-span-2'>
                  <label className={labelClass}>
                    Cover Image
                    <span className='text-[#71717a] font-normal ml-2'>— leave empty to keep current image</span>
                  </label>
                  {blog.imageURL && !preview && (
                    <img src={blog.imageURL} alt='Current' className='max-h-32 rounded-lg object-cover mb-1' />
                  )}
                  <input
                    type='file'
                    name='imageFile'
                    accept='image/*'
                    onChange={e => {
                      const file = e.target.files?.[0];
                      setPreview(file ? URL.createObjectURL(file) : null);
                    }}
                    className='w-full text-sm text-[#71717a] font-[inter] file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-[#3b82f6] file:text-white file:cursor-pointer cursor-pointer'
                  />
                  {preview && (
                    <img src={preview} alt='New preview' className='mt-2 max-h-40 rounded-lg object-cover' />
                  )}
                </div>
              </div>

              <div className='flex flex-col gap-2'>
                <label className={labelClass}>Excerpt *</label>
                <textarea name='excerpt' defaultValue={blog.excerpt} required rows={2} className={inputClass + ' resize-none'} />
              </div>

              <div className='flex flex-col gap-2'>
                <label className={labelClass}>
                  Body (HTML) *
                  <span className='text-[#71717a] font-normal ml-2'>— raw HTML</span>
                </label>
                <textarea name='body' defaultValue={blog.body} required rows={14} className={inputClass + ' resize-y font-mono text-xs'} />
              </div>

              <div className='flex gap-3 pt-2'>
                <button type='submit' disabled={pending} className='px-6 py-3 bg-[linear-gradient(90deg,#3B82F6_0%,#619DFF_50%,#3B82F6_100%)] rounded-lg text-[#F1F1F1] font-[inter] font-medium disabled:opacity-50 cursor-pointer'>
                  {pending ? 'Saving…' : 'Save Changes'}
                </button>
                <button type='button' onClick={() => { setOpen(false); setPreview(null); }} className='px-6 py-3 border border-[#3f3f46] rounded-lg text-[#F1F1F1] font-[inter] hover:border-[#71717a] transition-colors cursor-pointer'>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
