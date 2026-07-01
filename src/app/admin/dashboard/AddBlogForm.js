'use client';

import { addBlog } from '../actions';
import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';

const inputClass = 'w-full px-4 py-3 bg-[#18181b] border border-[#3f3f46] rounded-lg text-[#F1F1F1] font-[inter] placeholder-[#52525b] outline-none focus:border-[#3b82f6] transition-colors text-sm';
const labelClass = 'text-[#F1F1F1] text-sm font-[inter] font-medium';

export default function AddBlogForm() {
  const router = useRouter();
  const submittingRef = useRef(false);
  const [open, setOpen] = useState(false);
  const [pending, setPending] = useState(false);
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState(null);

  function handleClose() {
    setOpen(false);
    setPreview(null);
    setError(null);
    submittingRef.current = false;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (submittingRef.current) return;
    submittingRef.current = true;
    setPending(true);
    setError(null);

    const formData = new FormData(e.target);
    const result = await addBlog(formData);

    if (result?.error) {
      setError(result.error);
      setPending(false);
      submittingRef.current = false;
    } else {
      handleClose();
      router.refresh();
    }
  }

  if (!open) {
    return (
      <button
        type='button'
        onClick={() => setOpen(true)}
        className='px-6 py-3 bg-[linear-gradient(90deg,#3B82F6_0%,#619DFF_50%,#3B82F6_100%)] rounded-lg text-[#F1F1F1] font-[inter] font-medium cursor-pointer w-fit'
      >
        + Add New Blog
      </button>
    );
  }

  return (
    <div className='bg-[#27272a] border border-[#3f3f46] rounded-xl p-6'>
      <div className='flex items-center justify-between mb-6'>
        <h2 className='text-xl font-[newake] text-[#F1F1F1]'>Add New Blog Post</h2>
        <button type='button' onClick={handleClose} className='text-[#71717a] hover:text-[#F1F1F1] transition-colors text-xl cursor-pointer'>✕</button>
      </div>

      {error && (
        <div className='mb-4 bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-3'>
          <p className='text-red-400 text-sm font-[inter]'>{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className='flex flex-col gap-2'>
            <label className={labelClass}>Title *</label>
            <input type='text' name='title' placeholder='Blog post title' required className={inputClass} />
          </div>
          <div className='flex flex-col gap-2'>
            <label className={labelClass}>Slug (link) *</label>
            <input type='text' name='link' placeholder='how-to-implement-bc-in-lebanon' required className={inputClass} />
          </div>
          <div className='flex flex-col gap-2'>
            <label className={labelClass}>Type / Category *</label>
            <input type='text' name='type' placeholder='Guide, Success Story, News…' required className={inputClass} />
          </div>
          <div className='flex flex-col gap-2'>
            <label className={labelClass}>Author *</label>
            <input type='text' name='author' placeholder='Youssef Nasser' required className={inputClass} />
          </div>
          <div className='flex flex-col gap-2'>
            <label className={labelClass}>Date *</label>
            <input type='date' name='date' required className={inputClass} />
          </div>
          <div className='flex flex-col gap-2'>
            <label className={labelClass}>Image Alt Text</label>
            <input type='text' name='imageALT' placeholder='Descriptive alt text' className={inputClass} />
          </div>
          <div className='flex flex-col gap-2 md:col-span-2'>
            <label className={labelClass}>Cover Image</label>
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
              <img src={preview} alt='Preview' className='mt-2 max-h-40 rounded-lg object-cover' />
            )}
          </div>
        </div>

        <div className='flex flex-col gap-2'>
          <label className={labelClass}>Excerpt *</label>
          <textarea name='excerpt' placeholder='A short summary (1–2 sentences)' required rows={2} className={inputClass + ' resize-none'} />
        </div>

        <div className='flex flex-col gap-2'>
          <label className={labelClass}>
            Body (HTML) *
            <span className='text-[#71717a] font-normal ml-2'>— paste formatted HTML content here</span>
          </label>
          <textarea name='body' placeholder='<p>Your blog content in HTML...</p>' required rows={12} className={inputClass + ' resize-y font-mono text-xs'} />
        </div>

        <div className='flex gap-3 pt-2'>
          <button type='submit' disabled={pending} className='px-6 py-3 bg-[linear-gradient(90deg,#3B82F6_0%,#619DFF_50%,#3B82F6_100%)] rounded-lg text-[#F1F1F1] font-[inter] font-medium disabled:opacity-50 cursor-pointer'>
            {pending ? 'Publishing…' : 'Publish Blog'}
          </button>
          <button type='button' onClick={handleClose} className='px-6 py-3 border border-[#3f3f46] rounded-lg text-[#F1F1F1] font-[inter] hover:border-[#71717a] transition-colors cursor-pointer'>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
