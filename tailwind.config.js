/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        xenon: ['"Monaspace Xenon"', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}