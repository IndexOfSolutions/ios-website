import Link from 'next/link';
import { imageUrl, postPath } from '@opinly/shared';

import { renderConfig, formatPostDate } from './config';

/** Summary card for a `Post` from `posts()` / a category or author listing. */
export default function PostCard({ post }) {
  const href = postPath(renderConfig, post);
  const cover = post.image?.fileKey
    ? imageUrl(post.image.fileKey, renderConfig)
    : null;
  const published = formatPostDate(post.firstPublishedAt);

  return (
    <article className='group flex flex-col rounded-xl border border-border-color bg-secondary/40 overflow-hidden transition-colors hover:border-primary/60'>
      <Link href={href} className='flex flex-col h-full'>
        {cover ? (
          // eslint-disable-next-line @next/next/no-img-element -- images are unoptimized site-wide and served through the Opinly CDN rewrite
          <img
            src={cover}
            alt={post.image?.alt ?? post.title}
            loading='lazy'
            className='w-full aspect-video object-cover'
          />
        ) : null}

        <div className='flex flex-col gap-3 p-6 flex-1'>
          {post.category ? (
            <span className='text-xs uppercase tracking-wider text-primary'>
              {post.category.name}
            </span>
          ) : null}

          <h3 className='text-xl font-semibold text-fg group-hover:text-primary transition-colors'>
            {post.title}
          </h3>

          {post.description ? (
            <p className='text-sm text-fg/70 leading-6 line-clamp-3'>
              {post.description}
            </p>
          ) : null}

          <div className='mt-auto pt-4 flex items-center gap-2 text-xs text-edges'>
            {post.author?.name ? <span>{post.author.name}</span> : null}
            {post.author?.name && published ? <span>·</span> : null}
            {published ? (
              <time dateTime={post.firstPublishedAt}>{published}</time>
            ) : null}
          </div>
        </div>
      </Link>
    </article>
  );
}
