const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
//     join(__dirname,  './libs/ui/src/**/*.{html,ts,tsx}'),

//     ...createGlobPatternsForDependencies(__dirname),
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };
/**
 *
 *  @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    join(__dirname, './libs/ui/src/**/*.{html,ts,tsx}'),

    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      // 🎨 ألوان مخصصة
      colors: {
        primary: {
          50: '#e3f2fd',
          100: '#bbdefb',
          200: '#90caf9',
          300: '#64b5f6',
          400: '#42a5f5',
          500: '#2196f3', // ← اللون الأساسي
          600: '#1e88e5',
          700: '#1976d2',
          800: '#1565c0',
          900: '#0d47a1',
        },
        secondary: {
          500: '#9c27b0', // لون ثانوي (بنفسجي)
        },
        success: '#4caf50',
        warning: '#ff9800',
        error: '#f44336',
      },

      // 📏 مسافات مخصصة
      spacing: {
        18: '4.5rem', // 72px
        28: '7rem', // 112px
      },

      // 🔠 خطوط مخصصة
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'],
        heading: ['"Inter"', 'sans-serif'],
      },

      // 🧱 أنماط زوايا (border-radius)
      borderRadius: {
        xl: '1rem', // 16px
        '2xl': '1.5rem', // 24px
      },

      // ⚡️ تأثيرات تحويم مخصصة
      boxShadow: {
        card: '0 4px 12px rgba(0, 0, 0, 0.1)',
        hover: '0 6px 16px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [
    // يمكنك إضافة إضافات لاحقًا مثل:
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
  ],
};
