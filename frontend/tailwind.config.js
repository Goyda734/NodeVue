/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-pink': '#e91e63',
        'primary-pink-light': '#f06292',
        'primary-pink-dark': '#ad1457',
        'secondary-pink': '#f8bbd0',
        'accent-pink': '#fce4ec',
        'light-bg': '#fff5f7',
        'dark-text': '#4a1a2c',
        'light-text': '#fff9fb',
      },
    },
  },
  plugins: [],
};