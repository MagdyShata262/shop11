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

// To customize your Vite configuration you can use the viteFinal field.
// Check https://storybook.js.org/docs/react/builders/vite#configuration
// and https://nx.dev/recipes/storybook/custom-builder-configs
// libs/ui/.storybook/main.ts

// import type { StorybookConfig } from '@storybook/angular';

// const config: StorybookConfig = {
//   stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
//   addons: [
//     '@storybook/addon-essentials',
//     '@storybook/addon-interactions',
//     '@storybook/addon-a11y',
//   ],
//   framework: {
//     name: '@storybook/angular',
//     options: {},
//   },
//   core: {
//     builder: '@storybook/builder-webpack5', // ← اتركه كما هو ما لم تكن تستخدم Vite
//   },
//   typescript: {
//     check: false,
//   },
//   webpackFinal: async (config) => {
//     // ✅ إضافة includePaths لدعم متغيرات SCSS
//     const scssRule = config.module?.rules?.find((rule: any) =>
//       rule.test?.toString().includes('scss')
//     );

//     if (scssRule && scssRule.use) {
//       const sassLoaderOptions = scssRule.use.find((use: any) =>
//         use.loader?.includes('sass-loader')
//       );

//       if (sassLoaderOptions) {
//         sassLoaderOptions.options = {
//           ...sassLoaderOptions.options,
//           sassOptions: {
//             includePaths: [
//               'src/styles', // ← مسار المتغيرات
//               'src/assets/styles',
//             ],
//           },
//         };
//       }
//     }

//     return config;
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
