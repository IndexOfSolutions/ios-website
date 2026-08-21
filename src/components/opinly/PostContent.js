import { OpinlyContent } from '@opinly/react';

import { renderConfig, contentClassNames } from './config';

/**
 * Renders a post body (Tiptap JSON) as React elements.
 *
 * No math or markup of our own — <OpinlyContent> walks the node tree and the
 * classNames map in ./config styles each node type with the site's tokens.
 */
export default function PostContent({ content }) {
  return (
    <div className='max-w-none text-lg'>
      <OpinlyContent
        content={content}
        config={renderConfig}
        classNames={contentClassNames}
      />
    </div>
  );
}
