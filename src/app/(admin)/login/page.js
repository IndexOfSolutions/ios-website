import { signIn } from '../actions';
import Image from 'next/image';

export const metadata = {
  title: 'Admin Login | Index of Solutions',
  robots: { index: false, follow: false },
};

export default async function Login({ searchParams }) {
  const { error } = await searchParams;

  return (
    <div className='min-h-screen bg-[#18181b] flex items-center justify-center px-4'>
      <div className='w-full max-w-md flex flex-col gap-8'>

        <div className='flex flex-col items-center gap-4'>
          <Image
            src='/assets/images/logo/ios.webp'
            alt='IOS Admin'
            width={48}
            height={50}
            sizes='48px'
          />
          <div className='text-center'>
            <h1 className='text-3xl font-[newake] text-[#F1F1F1]'>Admin Panel</h1>
            <p className='text-[#71717a] text-sm mt-1 font-[inter]'>Index of Solutions</p>
          </div>
        </div>

        <div className='bg-[#27272a] border border-[#3f3f46] rounded-xl p-8 flex flex-col gap-6'>
          {error && (
            <div className='bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-3'>
              <p className='text-red-400 text-sm font-[inter]'>{decodeURIComponent(error)}</p>
            </div>
          )}

          <form action={signIn} className='flex flex-col gap-4'>
            <div className='flex flex-col gap-2'>
              <label className='text-[#F1F1F1] text-sm font-[inter] font-medium'>Password</label>
              <input
                type='password'
                name='password'
                placeholder='••••••••'
                required
                autoFocus
                className='px-4 py-3 bg-[#18181b] border border-[#3f3f46] rounded-lg text-[#F1F1F1] font-[inter] placeholder-[#52525b] outline-none focus:border-[#3b82f6] transition-colors'
              />
            </div>

            <button
              type='submit'
              className='mt-2 px-6 py-3 bg-[linear-gradient(90deg,#3B82F6_0%,#619DFF_50%,#3B82F6_100%)] rounded-lg text-[#F1F1F1] font-[inter] font-medium cursor-pointer'
            >
              Sign In
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
