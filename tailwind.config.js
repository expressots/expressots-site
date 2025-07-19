/** @type {import('tailwindcss').Config} */
const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        grid: isProduction ? "url('/assets/grid.svg')" : "url('/assets/grid.svg')",
        oil: isProduction ? "url('/assets/topography.svg')" : "url('/assets/topography.svg')",
      },
      colors: {
        base: {
          1: `rgb(var(--base-1) / <alpha-value>)`,
          2: `rgb(var(--base-2) / <alpha-value>)`,
          3: `rgb(var(--base-3) / <alpha-value>)`,
          4: `rgb(var(--base-4) / <alpha-value>)`,
          5: `rgb(var(--base-5) / <alpha-value>)`,
          6: `rgb(var(--base-6) / <alpha-value>)`,
          7: `rgb(var(--base-7) / <alpha-value>)`,
          8: `rgb(var(--base-8) / <alpha-value>)`,
          9: `rgb(var(--base-9) / <alpha-value>)`,
          10: `rgb(var(--base-10) / <alpha-value>)`,
          11: `rgb(var(--base-11) / <alpha-value>)`,
          12: `rgb(var(--base-12) / <alpha-value>)`,
        },
        neutral: {
          1: `rgb(var(--neutral-1) / <alpha-value>)`,
          2: `rgb(var(--neutral-2) / <alpha-value>)`,
          3: `rgb(var(--neutral-3) / <alpha-value>)`,
          4: `rgb(var(--neutral-4) / <alpha-value>)`,
          5: `rgb(var(--neutral-5) / <alpha-value>)`,
          6: `rgb(var(--neutral-6) / <alpha-value>)`,
          7: `rgb(var(--neutral-7) / <alpha-value>)`,
          8: `rgb(var(--neutral-8) / <alpha-value>)`,
          9: `rgb(var(--neutral-9) / <alpha-value>)`,
          10: `rgb(var(--neutral-10) / <alpha-value>)`,
          11: `rgb(var(--neutral-11) / <alpha-value>)`,
          12: `rgb(var(--neutral-12) / <alpha-value>)`,
        },
        accent: {
          50: `rgb(var(--accent-50) / <alpha-value>)`,
          100: `rgb(var(--accent-100) / <alpha-value>)`,
          200: `rgb(var(--accent-200) / <alpha-value>)`,
          300: `rgb(var(--accent-300) / <alpha-value>)`,
          400: `rgb(var(--accent-400) / <alpha-value>)`,
          500: `rgb(var(--accent-500) / <alpha-value>)`,
          600: `rgb(var(--accent-600) / <alpha-value>)`,
          700: `rgb(var(--accent-700) / <alpha-value>)`,
          800: `rgb(var(--accent-800) / <alpha-value>)`,
          900: `rgb(var(--accent-900) / <alpha-value>)`,
          950: `rgb(var(--accent-950) / <alpha-value>)`,
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(61, 230, 120, 0.3)',
          },
          '50%': {
            boxShadow: '0 0 40px rgba(61, 230, 120, 0.6)',
          },
        },
        slideInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeInScale: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.9)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        pulse: {
          '0%, 100%': {
            opacity: '1',
          },
          '50%': {
            opacity: '0.5',
          },
        },
        ascend: {
          '0%, 100%': {
            border: '2px rgb(var(--base-10)) solid',
            boxShadow: '0px 0px 0px rgb(var(--base-12))',
          },
          '100%': {
            border: '2px rgb(var(--base-8)) solid',
            boxShadow: '0px 0px 10px rgb(var(--base-10))',
          },
        },
        showup: {
          '0%, 100%': {
            transform: 'translateY(50px)',
            opacity: 0,
          },
          '100%': {
            transform: 'translateY(0px)',
            opacity: 1,
          },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        glow: 'glow 2s ease-in-out infinite',
        slideInUp: 'slideInUp 0.6s ease-out',
        fadeInScale: 'fadeInScale 0.5s ease-out',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        ascend: 'ascend 0.25s ease-in forwards',
        showup: 'showup 0.66s ease forwards',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
