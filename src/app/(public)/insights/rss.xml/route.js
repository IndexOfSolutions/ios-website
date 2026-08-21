import { buildRssItems, escapeHtml, blogUrl } from '@opinly/shared';
import { opinlyConfig } from '@opinly/next';

import { getOpinly, isOpinlyConfigured } from '@/clients/opinly';

// Invalidated by the webhook rather than on a timer.
export const revalidate = false;

export async function GET() {
  const feedUrl = `${blogUrl(opinlyConfig)}/rss.xml`;

  let items = [];
  if (isOpinlyConfigured()) {
    try {
      items = buildRssItems(await getOpinly().rss({ limit: 50 }), opinlyConfig);
    } catch (err) {
      console.warn('[opinly] Could not build RSS feed:', err?.message);
    }
  }

  const entries = items
    // buildRssItems already returns an absolute `url`, so it is used as-is.
    .map((item) =>
      [
        '    <item>',
        `      <title>${escapeHtml(item.title)}</title>`,
        `      <link>${escapeHtml(item.url)}</link>`,
        `      <guid isPermaLink="true">${escapeHtml(item.url)}</guid>`,
        item.description
          ? `      <description>${escapeHtml(item.description)}</description>`
          : null,
        item.date
          ? `      <pubDate>${new Date(item.date).toUTCString()}</pubDate>`
          : null,
        '    </item>',
      ]
        .filter(Boolean)
        .join('\n')
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeHtml(`${opinlyConfig.siteName} Insights`)}</title>
    <link>${escapeHtml(blogUrl(opinlyConfig))}</link>
    <description>Microsoft Dynamics 365 Business Central insights from ${escapeHtml(opinlyConfig.siteName)}.</description>
    <language>en</language>
    <atom:link href="${escapeHtml(feedUrl)}" rel="self" type="application/rss+xml" />
${entries}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
