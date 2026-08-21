import Link from 'next/link';
import { categoryPath } from '@opinly/shared';

import PostCard from './PostCard';
import { renderConfig } from './config';

/** The /insights landing page: category nav + the latest posts. */
export default function InsightsIndex({ data }) {
  const { posts, categories } = data;

  return (
    <section className='w-full px-6 md:px-12 lg:px-20 py-section-vertical-sm md:py-section-vertical'>
      <header className='flex flex-col gap-4 max-w-3xl'>
        <h1 className='font-[newake] text-5xl md:text-7xl text-fg'>Insights</h1>
        <p className='font-[inter-italic] text-lg text-fg/70 leading-8'>
          Practical guidance on Microsoft Dynamics 365 Business Central, ERP
          implementation, and the systems that run your business.
        </p>
      </header>

      {categories?.length ? (
        <nav className='flex flex-wrap gap-3 mt-10'>
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={categoryPath(renderConfig, category.slug)}
              className='text-sm px-4 py-2 rounded-full border border-border-color text-fg/80 hover:border-primary hover:text-primary transition-colors'
            >
              {category.title}
            </Link>
          ))}
        </nav>
      ) : null}

      {posts?.length ? (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12'>
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className='mt-12 text-fg/60'>No posts published yet.</p>
      )}
    </section>
  );
}
