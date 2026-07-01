'use client';

import { deleteBlog } from '../actions';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DeleteButton({ id, title }) {
  const router = useRouter();
  const [pending, setPending] = useState(false);

  async function handleDelete() {
    if (pending) return;
    if (!confirm(`Delete "${title}"? This cannot be undone.`)) return;
    setPending(true);
    const result = await deleteBlog(id);
    if (result?.error) {
      alert(result.error);
      setPending(false);
    } else {
      router.refresh();
    }
  }

  return (
    <button
      type='button'
      onClick={handleDelete}
      disabled={pending}
      className='px-3 py-1.5 text-sm font-[inter] text-red-400 border border-red-500/30 rounded-lg hover:bg-red-500/10 transition-colors cursor-pointer disabled:opacity-50'
    >
      {pending ? '…' : 'Delete'}
    </button>
  );
}
