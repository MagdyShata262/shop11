const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // التطبيقات
    join(__dirname, 'apps/**/!(*.stories|*.spec).{ts,html}'),
    // المكتبات
    join(__dirname, 'libs/**/!(*.stories|*.spec).{ts,html}'),
    // Storybook
    join(__dirname, '.storybook/**/*.{js,ts,html}'),
    // ملفات الـ stories في apps و libs
    join(__dirname, 'apps/**/*.stories.@(js|jsx|ts|tsx|mdx)'),
    join(__dirname, 'libs/**/*.stories.@(js|jsx|ts|tsx|mdx)'),
    // التبعيات التلقائية من Nx
    ...createGlobPatternsForDependencies(__dirname),
  ],

  theme: {
    extend: {
      // الألوان الموحّدة
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9', // ← لون رئيسي موحد (من Tailwind الافتراضي)
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
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
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        error: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
      },

      // الظلال (تم دمج كل القيم دون تكرار)
      boxShadow: {
        card: '0 4px 12px rgba(0, 0, 0, 0.1)',
        hover: '0 6px 16px rgba(0, 0, 0, 0.15)',
        soft: '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        medium:
          '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        glow: '0 0 20px -5px rgba(59, 130, 246, 0.3)',
        'glow-primary': '0 0 25px -5px rgba(14, 165, 233, 0.4)',
      },

      // الخطوط
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
        ],
        arabic: ['Noto Sans Arabic', 'Tahoma', 'Arial', 'sans-serif'],
        heading: ['"Inter"', 'sans-serif'],
      },

      // المسافات
      spacing: {
        18: '4.5rem',
        28: '7rem',
        88: '22rem',
        128: '32rem',
      },

      // الزوايا المستديرة
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
      },

      // الخطوط الصغيرة
      fontSize: {
        xxs: '0.625rem',
      },

      // z-index مخصص
      zIndex: {
        60: '60',
        70: '70',
        80: '80',
        90: '90',
        100: '100',
      },

      // شاشات RTL/LTR
      screens: {
        rtl: { raw: '(dir: rtl)' },
        ltr: { raw: '(dir: ltr)' },
      },

      // الرسوم المتحركة
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'bounce-soft': 'bounceSoft 2s infinite',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
    },
  },

  // دعم RTL
  corePlugins: {
    textAlign: true,
    float: true,
    clear: true,
    margin: true,
    padding: true,
  },

  // لا إضافات حالياً (يمكنك إضافة plugins لاحقاً مثل forms أو typography)
  plugins: [],
};
