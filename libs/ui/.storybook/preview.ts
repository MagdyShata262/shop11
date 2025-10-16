// libs/ui/.storybook/preview.ts

import type { Preview } from '@storybook/angular';
// import '../src/lib/styles/_variables.scss';
// ✅ استيراد الأنماط العالمية (تعديل حسب مشروعك)

// import '@angular/material/prebuilt-themes/indigo-pink.css'; // ← إذا كنت تستخدم Angular Material

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
