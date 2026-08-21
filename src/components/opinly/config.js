import { opinlyConfig } from '@opinly/next';

/**
 * Render config for <OpinlyContent> and the @opinly/shared URL helpers.
 *
 * Derived from `opinlyConfig`, which @opinly/next populates from the OPINLY_*
 * env vars that `withOpinlyConfig` injected in next.config.mjs — so these
 * values always track what is configured there rather than drifting from it.
 */
export const renderConfig = {
  imagesPrefix: opinlyConfig.imagesPrefix,
  siteUrl: opinlyConfig.siteUrl,
  blogPrefix: opinlyConfig.blogPrefix,
  siteName: opinlyConfig.siteName,
  categoryPrefix: opinlyConfig.categoryPrefix,
  authorPrefix: opinlyConfig.authorPrefix,
  tagPrefix: opinlyConfig.tagPrefix,
};

/** Tailwind classes handed to the content renderer, per node type. */
export const contentClassNames = {
  paragraph: 'text-fg/80 leading-8 mb-6',
  heading: 'font-[newake] text-fg mt-12 mb-4',
  bulletList: 'list-disc pl-6 mb-6 text-fg/80 space-y-2',
  orderedList: 'list-decimal pl-6 mb-6 text-fg/80 space-y-2',
  listItem: 'leading-8',
  blockquote: 'border-l-2 border-primary pl-6 italic text-fg/70 my-8',
  codeBlock:
    'font-[jetBrainsMono] text-sm bg-secondary border border-border-color rounded-lg p-4 overflow-x-auto my-6',
  code: 'font-[jetBrainsMono] text-sm bg-secondary px-1.5 py-0.5 rounded',
  link: 'text-primary underline underline-offset-4 hover:opacity-80',
  image: 'rounded-lg border border-border-color my-8 w-full h-auto',
  horizontalRule: 'border-border-color my-12',
  table: 'w-full border-collapse text-sm my-8',
  tableHeader:
    'border border-border-color bg-secondary px-4 py-2 text-left font-semibold',
  tableCell: 'border border-border-color px-4 py-2 align-top',
};

export const formatPostDate = (value) => {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
};
