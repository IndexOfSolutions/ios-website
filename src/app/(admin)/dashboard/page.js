import { createClient } from '@/utils/supabase/server';
import { signOut } from '../actions';
import Image from 'next/image';
import Link from 'next/link';
import DeleteButton from './DeleteButton';
import AddBlogForm from './AddBlogForm';

export const metadata = {
  title: 'Admin Dashboard | Index of Solutions',
  robots: { index: false, follow: false },
};

export default async function Dashboard({ searchParams }) {
  const { success, error } = await searchParams;

  const supabase = await createClient();
  const { data: blogs, error: fetchError } = await supabase
    .from('Blogs')
    .select('id, title, type, author, date, link')
    .order('date', { ascending: false });

  return (
    <div className='min-h-screen bg-[#18181b] text-[#F1F1F1]'>

      {/* Header */}
      <header className='sticky top-0 bg-[#18181b]/90 backdrop-blur-xl border-b border-[#3f3f46] z-10'>
        <div className='max-w-6xl mx-auto px-6 h-16 flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <Image src='/assets/images/logo/ios.webp' alt='IOS' width={32} height={34} sizes='32px' />
            <span className='font-[newake] text-lg'>Admin Panel</span>
          </div>
          <div className='flex items-center gap-4'>
            <Link
              href='/'
              target='_blank'
              className='text-sm text-[#71717a] hover:text-[#F1F1F1] font-[inter] transition-colors'
            >
              View Site ↗
            </Link>
            <form action={signOut}>
              <button
                type='submit'
                className='px-4 py-2 text-sm font-[inter] border border-[#3f3f46] rounded-lg hover:border-[#71717a] transition-colors cursor-pointer'
              >
                Sign Out
              </button>
            </form>
          </div>
        </div>
      </header>

      <main className='max-w-6xl mx-auto px-6 py-10 flex flex-col gap-8'>

        {/* Flash messages */}
        {success && (
          <div className='bg-green-500/10 border border-green-500/30 rounded-lg px-4 py-3'>
            <p className='text-green-400 text-sm font-[inter]'>{decodeURIComponent(success)}</p>
          </div>
        )}
        {(error || fetchError) && (
          <div className='bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-3'>
            <p className='text-red-400 text-sm font-[inter]'>
              {error ? decodeURIComponent(error) : fetchError?.message}
            </p>
          </div>
        )}

        {/* Add blog button / form */}
        <AddBlogForm />

        {/* Blog list */}
        <div className='flex flex-col gap-4'>
          <div className='flex items-center justify-between'>
            <h2 className='text-2xl font-[newake]'>Blog Posts</h2>
            <span className='text-sm text-[#71717a] font-[inter]'>{blogs?.length ?? 0} posts</span>
          </div>

          <div className='bg-[#27272a] border border-[#3f3f46] rounded-xl overflow-hidden'>
            {!blogs || blogs.length === 0 ? (
              <div className='px-6 py-12 text-center text-[#71717a] font-[inter]'>
                No blog posts yet. Add your first one above.
              </div>
            ) : (
              <table className='w-full text-sm font-[inter]'>
                <thead>
                  <tr className='border-b border-[#3f3f46] text-[#71717a]'>
                    <th className='text-left px-4 py-3 font-medium'>Title</th>
                    <th className='text-left px-4 py-3 font-medium hidden md:table-cell'>Type</th>
                    <th className='text-left px-4 py-3 font-medium hidden lg:table-cell'>Author</th>
                    <th className='text-left px-4 py-3 font-medium hidden md:table-cell'>Date</th>
                    <th className='px-4 py-3'></th>
                  </tr>
                </thead>
                <tbody>
                  {blogs.map((blog, i) => (
                    <tr
                      key={blog.id}
                      className={`border-b border-[#3f3f46] last:border-0 hover:bg-[#18181b]/50 transition-colors`}
                    >
                      <td className='px-4 py-3'>
                        <div>
                          <p className='text-[#F1F1F1] font-medium leading-tight'>{blog.title}</p>
                          <p className='text-[#71717a] text-xs mt-0.5'>/blogs/{blog.link}</p>
                        </div>
                      </td>
                      <td className='px-4 py-3 text-[#71717a] hidden md:table-cell'>
                        <span className='px-2 py-1 bg-[#18181b] border border-[#3f3f46] rounded text-xs'>
                          {blog.type}
                        </span>
                      </td>
                      <td className='px-4 py-3 text-[#71717a] hidden lg:table-cell'>{blog.author}</td>
                      <td className='px-4 py-3 text-[#71717a] hidden md:table-cell'>{blog.date}</td>
                      <td className='px-4 py-3 text-right'>
                        <div className='flex items-center justify-end gap-2'>
                          <Link
                            href={`/blogs/${blog.link}`}
                            target='_blank'
                            className='px-3 py-1.5 text-xs font-[inter] text-[#71717a] border border-[#3f3f46] rounded-lg hover:text-[#F1F1F1] hover:border-[#71717a] transition-colors'
                          >
                            View
                          </Link>
                          <DeleteButton id={blog.id} title={blog.title} />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>

      </main>
    </div>
  );
}
