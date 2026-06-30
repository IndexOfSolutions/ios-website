'use client';

import { deleteBlog } from '../actions';

export default function DeleteButton({ id, title }) {
  async function handleDelete() {
    if (!confirm(`Delete "${title}"? This cannot be undone.`)) return;
    await deleteBlog(id);
  }

  return (
    <button
      type='button'
      onClick={handleDelete}
      className='px-3 py-1.5 text-sm font-[inter] text-red-400 border border-red-500/30 rounded-lg hover:bg-red-500/10 transition-colors cursor-pointer'
    >
      Delete
    </button>
  );
}
