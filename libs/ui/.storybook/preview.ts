// libs/ui/.storybook/preview.ts

import type { Preview } from '@storybook/angular';
// import '../src/styles/tailwind.css?raw';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
