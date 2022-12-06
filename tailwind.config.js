/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins'],
      },
      fontSize: {
        '5xl': ['48px'],
        '4xl': ['40px'],
        '3xl': ['32px'],
        '2xl': ['24px'],
        xs: ['14px'],
      },
      outlineWidth: {
        xs: '3px',
        s: '4px',
      },
      backgroundImage: {
        'gradient-50-50': 'linear-gradient(90deg, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 100%);',
        'gradient-30-70': 'linear-gradient(90deg, var(--tw-gradient-from) -12.56%, var(--tw-gradient-to) 62.92%);',
        'gradient-20-80': 'linear-gradient(90deg, var(--tw-gradient-from) -15.33%, var(--tw-gradient-to) 38.87%);',
      },
    },
  },
  plugins: [],
};
