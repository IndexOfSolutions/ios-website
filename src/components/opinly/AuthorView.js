import { OpinlyJsonLd } from '@opinly/next';
import { buildPersonJsonLd, imageUrl, authorUrl } from '@opinly/shared';

import PostCard from './PostCard';
import { renderConfig } from './config';

/** A single author page with their published posts. */
export default function AuthorView({ author }) {
  const avatar = author.image?.fileKey
    ? imageUrl(author.image.fileKey, renderConfig)
    : null;

  return (
    <section className='w-full px-6 md:px-12 lg:px-20 py-section-vertical-sm md:py-section-vertical'>
      <OpinlyJsonLd
        data={buildPersonJsonLd(
          {
            name: author.name,
            bio: author.bio,
            url: authorUrl(renderConfig, author.slug),
            imageFileKey: author.image?.fileKey,
          },
          renderConfig
        )}
      />

      <header className='flex flex-col md:flex-row gap-6 md:items-center max-w-3xl'>
        {avatar ? (
          // eslint-disable-next-line @next/next/no-img-element -- images are unoptimized site-wide and served through the Opinly CDN rewrite
          <img
            src={avatar}
            alt={author.image?.alt ?? author.name}
            className='w-24 h-24 rounded-full object-cover border border-border-color'
          />
        ) : null}
        <div className='flex flex-col gap-3'>
          <h1 className='font-[newake] text-4xl md:text-5xl text-fg'>
            {author.name}
          </h1>
          {author.bio ? (
            <p className='text-fg/70 leading-8'>{author.bio}</p>
          ) : null}
        </div>
      </header>

      {author.posts?.length ? (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12'>
          {author.posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className='mt-12 text-fg/60'>No posts by this author yet.</p>
      )}
    </section>
  );
}
