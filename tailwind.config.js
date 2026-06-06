/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        apice: {
          50: '#f8f7f4',
          100: '#efece5',
          200: '#e0d9cc',
          300: '#ccc0ad',
          400: '#b8a48a',
          500: '#a88b6a',
          600: '#9c7a5e',
          700: '#82624d',
          800: '#6b5241',
          900: '#574336',
          950: '#2d211c',
        },
        accent: {
          light: '#d4a574',
          DEFAULT: '#c4935e',
          dark: '#a67c4e',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
