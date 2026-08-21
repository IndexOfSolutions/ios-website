import { OpinlyJsonLd } from '@opinly/next';
import { buildCollectionJsonLd, categoryUrl } from '@opinly/shared';

import PostCard from './PostCard';
import { renderConfig } from './config';

/** A category archive — `posts({ category })` behind the category prefix. */
export default function CategoryView({ category }) {
  return (
    <section className='w-full px-6 md:px-12 lg:px-20 py-section-vertical-sm md:py-section-vertical'>
      <OpinlyJsonLd
        data={buildCollectionJsonLd({
          name: category.name,
          description: category.description,
          url: categoryUrl(renderConfig, category.slug),
        })}
      />

      <header className='flex flex-col gap-4 max-w-3xl'>
        <span className='text-xs uppercase tracking-wider text-primary'>
          Category
        </span>
        <h1 className='font-[newake] text-5xl md:text-6xl text-fg'>
          {category.name}
        </h1>
        {category.description ? (
          <p className='font-[inter-italic] text-lg text-fg/70 leading-8'>
            {category.description}
          </p>
        ) : null}
      </header>

      {category.posts?.length ? (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12'>
          {category.posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className='mt-12 text-fg/60'>No posts in this category yet.</p>
      )}
    </section>
  );
}
