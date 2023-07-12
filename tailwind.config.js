/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
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
      },
      keyframes: {
        ascend: {
          '0%, 100%': {
            border: '1px rgb(var(--base-10)) solid',
            boxShadow: '0px 0px 0px rgb(var(--base-5))',
          },
          '100%': {
            border: '1px rgb(var(--base-5)) solid',
            boxShadow: '0px 0px 10px rgb(var(--base-5))',
          },
        },
      },
      animation: {
        ascend: 'ascend 0.25s ease-in forwards',
      },
    },
  },
  plugins: [],
}
