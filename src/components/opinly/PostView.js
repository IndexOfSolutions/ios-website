import Link from 'next/link';
import { OpinlyJsonLd, buildBlogPostingJsonLd, buildFaqJsonLd } from '@opinly/next';
import {
  imageUrl,
  calculateReadingTime,
  categoryPath,
  authorPath,
  tagPath,
} from '@opinly/shared';

import PostContent from './PostContent';
import { renderConfig, formatPostDate } from './config';

/** A single post: hero, body, FAQs, and the structured data for both. */
export default function PostView({ post }) {
  const cover = post.titleFile?.fileKey
    ? imageUrl(post.titleFile.fileKey, renderConfig)
    : null;
  const published = formatPostDate(post.firstPublishedAt);
  const readingTime = calculateReadingTime(post.content);
  const faqs = post.faqs ?? [];

  return (
    <article className='w-full px-6 md:px-12 lg:px-20 py-section-vertical-sm md:py-section-vertical'>
      <OpinlyJsonLd data={buildBlogPostingJsonLd(post)} />
      {faqs.length ? <OpinlyJsonLd data={buildFaqJsonLd(faqs)} /> : null}

      <header className='max-w-3xl mx-auto flex flex-col gap-6'>
        {post.category ? (
          <Link
            href={categoryPath(renderConfig, post.category.slug)}
            className='text-xs uppercase tracking-wider text-primary hover:opacity-80 w-fit'
          >
            {post.category.name}
          </Link>
        ) : null}

        <h1 className='font-[newake] text-4xl md:text-6xl leading-tight text-fg'>
          {post.title}
        </h1>

        {post.description ? (
          <p className='font-[inter-italic] text-xl text-fg/70 leading-8'>
            {post.description}
          </p>
        ) : null}

        <div className='flex flex-wrap items-center gap-3 text-sm text-edges border-b border-border-color pb-6'>
          {post.author ? (
            <Link
              href={authorPath(renderConfig, post.author.slug)}
              className='text-fg/80 hover:text-primary transition-colors'
            >
              {post.author.name}
            </Link>
          ) : null}
          {post.author && published ? <span>·</span> : null}
          {published ? (
            <time dateTime={post.firstPublishedAt}>{published}</time>
          ) : null}
          <span>·</span>
          <span>{readingTime} min read</span>
        </div>
      </header>

      {cover ? (
        <div className='max-w-4xl mx-auto mt-10'>
          {/* eslint-disable-next-line @next/next/no-img-element -- images are unoptimized site-wide and served through the Opinly CDN rewrite */}
          <img
            src={cover}
            alt={post.titleFile?.altText ?? post.title}
            className='w-full rounded-xl border border-border-color'
          />
          {post.titleFile?.caption ? (
            <p className='text-center text-sm text-edges mt-3'>
              {post.titleFile.caption}
            </p>
          ) : null}
        </div>
      ) : null}

      <div className='max-w-3xl mx-auto mt-12'>
        <PostContent content={post.content} />
      </div>

      {faqs.length ? (
        <section className='max-w-3xl mx-auto mt-16 pt-12 border-t border-border-color'>
          <h2 className='font-[newake] text-3xl text-fg mb-8'>
            Frequently asked questions
          </h2>
          <div className='flex flex-col gap-6'>
            {faqs.map((faq) => (
              <div key={faq.question} className='flex flex-col gap-2'>
                <h3 className='text-lg font-semibold text-fg'>{faq.question}</h3>
                <p className='text-fg/70 leading-8'>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {post.tags?.length ? (
        <footer className='max-w-3xl mx-auto mt-16 pt-8 border-t border-border-color flex flex-wrap gap-3'>
          {post.tags.map((tag) => (
            <Link
              key={tag.slug}
              href={tagPath(renderConfig, tag.slug)}
              className='text-xs px-3 py-1.5 rounded-full border border-border-color text-fg/70 hover:border-primary hover:text-primary transition-colors'
            >
              {tag.name}
            </Link>
          ))}
        </footer>
      ) : null}
    </article>
  );
}
