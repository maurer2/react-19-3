import type { ReactNode } from 'react';
import { createRootRoute, HeadContent, Scripts } from '@tanstack/react-router';

import appCss from '#styles.css?url';

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        name: 'text-scale',
        content: 'scale',
      },
      {
        title: 'React 19.3',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
});

const cssLayers = '@layer reset, tokens, base, layout, components, utilities;';

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <style
          href="layer-order"
          precedence="layer-order"
        >
          {cssLayers}
        </style>
        <HeadContent />
      </head>
      <body>
        {children}

        <Scripts />
      </body>
    </html>
  );
}
