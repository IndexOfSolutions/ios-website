import { OpinlyJsonLd } from '@opinly/next';
import { buildCollectionJsonLd, tagUrl } from '@opinly/shared';

import PostCard from './PostCard';
import { renderConfig } from './config';

/** A tag archive — `posts({ tag })` behind the tag prefix. */
export default function TagView({ tag }) {
  return (
    <section className='w-full px-6 md:px-12 lg:px-20 py-section-vertical-sm md:py-section-vertical'>
      <OpinlyJsonLd
        data={buildCollectionJsonLd({
          name: tag.name,
          description: tag.description,
          url: tagUrl(renderConfig, tag.slug),
        })}
      />

      <header className='flex flex-col gap-4 max-w-3xl'>
        <span className='text-xs uppercase tracking-wider text-primary'>Tag</span>
        <h1 className='font-[newake] text-5xl md:text-6xl text-fg'>{tag.name}</h1>
        {tag.description ? (
          <p className='font-[inter-italic] text-lg text-fg/70 leading-8'>
            {tag.description}
          </p>
        ) : null}
      </header>

      {tag.posts?.length ? (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12'>
          {tag.posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className='mt-12 text-fg/60'>No posts with this tag yet.</p>
      )}
    </section>
  );
}
