/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx,md,mdx}',
    './theme.config.tsx'
  ],
  theme: {
    extend: {
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',  // This is a very large radius
      },
      colors: {
        magic: {
          purple: "#085abd",
          'semi-deep-purple': '#2fafec',
          'deep-purple': "#072246",
          black: "#101114",
          white: "#F0EFFF",
          'soft-pink': "#F7D2FE",
          'link-purple': '#B794FF',
        },
        'ink-grey': {
          100: '#F3F4F6',
          400: '#6B7280',
          700: '#374151',
        },
      },
      fontFamily: {
        sans: ['var(--font-plus-jakarta-sans)', 'var(--font-inter)', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica', 'Apple Color Emoji', 'Arial', 'sans-serif', 'Segoe UI Emoji', 'Segoe UI Symbol'],
      },
    },
  },
  plugins: [],
}
