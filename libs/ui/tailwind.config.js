const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // المسارات الأساسية للمشروع
    join(__dirname, 'src/**/*.{html,ts}'),

    // مسارات مكتبة UI
    join(__dirname, 'libs/ui/src/**/*.{html,ts}'),

    // مسارات Storybook
    join(__dirname, '.storybook/**/*.{js,ts,html}'),
    join(__dirname, '**/*.stories.@(js,jsx,ts,tsx,mdx)'),

    // التبعيات التلقائية من Nx
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e3f2fd',
          100: '#bbdefb',
          200: '#90caf9',
          300: '#64b5f6',
          400: '#42a5f5',
          500: '#2196f3',
          600: '#1e88e5',
          700: '#1976d2',
          800: '#1565c0',
          900: '#0d47a1',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
      },
      spacing: {
        18: '4.5rem',
        28: '7rem',
      },
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'],
        heading: ['"Inter"', 'sans-serif'],
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        card: '0 4px 12px rgba(0, 0, 0, 0.1)',
        hover: '0 6px 16px rgba(0, 0, 0, 0.15)',
      },
      // إعدادات RTL إضافية
      screens: {
        rtl: { raw: '(dir: rtl)' },
        ltr: { raw: '(dir: ltr)' },
      },
    },
  },
  plugins: [],
  // إعدادات RTL الأساسية
  corePlugins: {
    // تأكد من تفعيل الـ core plugins المطلوبة لـ RTL
    textAlign: true,
    float: true,
    clear: true,
    margin: true,
    padding: true,
  },
};
