/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'background-color': '#E9F6FF',
        'text-color': '#280274',
        'accent-color': '#FE7A36',
        'secondary-color': '#3652AD',
      },
    },
  },
  plugins: [],
}