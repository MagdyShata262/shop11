// import type { StorybookConfig } from '@storybook/angular';

// const config: StorybookConfig = {
//   stories: ['../**/*.@(mdx|stories.@(js|jsx|ts|tsx))'],
//   addons: [],
//   framework: {
//     name: '@storybook/angular',
//     options: {
//       builder: {
//         viteConfigPath: 'libs/ui/vite.config.mts',
//       },
//     },
//   },
// };

// export default config;


import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  core: {
    disableTelemetry: true, // ✅ تعطيل telemetry
    builder: '@storybook/builder-webpack5',
  },
  typescript: {
    check: false,
  },
};

export default config;
