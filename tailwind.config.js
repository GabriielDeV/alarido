/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        orange: {
          500: '#ff4500',
          600: '#cc3700',
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
        navy: {
          50: '#e6f1ff',
          100: '#cce4ff',
          200: '#99c8ff',
          300: '#66adff',
          400: '#3392ff',
          500: '#0047AB', // Azul Cobalto
          600: '#3d518c', // Voltando para o tom escuro original
          700: '#334471', // Voltando para o tom escuro original
          800: '#2c395d', // Voltando para o tom escuro original
          900: '#1a223d', // Voltando para o tom escuro original
        }
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'serif'],
      }
    },
  },
  plugins: [],
  safelist: [
    'bg-gray-50',
    'dark:bg-gray-900',
    'bg-white',
    'dark:bg-gray-800',
    'text-gray-700',
    'dark:text-gray-300',
    'text-gray-900',
    'dark:text-gray-100',
    'border-gray-300',
    'dark:border-gray-700',
    'bg-orange-500',
    'hover:bg-orange-600',
    'bg-navy-50',
    'dark:bg-navy-900',
    'bg-navy-500',
    'hover:bg-navy-600',
  ]
} 