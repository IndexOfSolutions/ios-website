import Link from 'next/link';
import { imageUrl, authorPath } from '@opinly/shared';

import { renderConfig } from './config';

/** The authors index. */
export default function AuthorsView({ authors }) {
  return (
    <section className='w-full px-6 md:px-12 lg:px-20 py-section-vertical-sm md:py-section-vertical'>
      <h1 className='font-[newake] text-5xl md:text-6xl text-fg'>Authors</h1>

      {authors?.length ? (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12'>
          {authors.map((author) => {
            const avatar = author.image?.fileKey
              ? imageUrl(author.image.fileKey, renderConfig)
              : null;

            return (
              <Link
                key={author.slug}
                href={authorPath(renderConfig, author.slug)}
                className='flex items-center gap-4 p-6 rounded-xl border border-border-color bg-secondary/40 hover:border-primary/60 transition-colors'
              >
                {avatar ? (
                  // eslint-disable-next-line @next/next/no-img-element -- images are unoptimized site-wide and served through the Opinly CDN rewrite
                  <img
                    src={avatar}
                    alt={author.image?.alt ?? author.name}
                    className='w-16 h-16 rounded-full object-cover'
                  />
                ) : null}
                <div className='flex flex-col gap-1'>
                  <span className='text-lg font-semibold text-fg'>
                    {author.name}
                  </span>
                  <span className='text-sm text-edges'>
                    {author.posts?.length ?? 0} post
                    {author.posts?.length === 1 ? '' : 's'}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <p className='mt-12 text-fg/60'>No authors yet.</p>
      )}
    </section>
  );
}
