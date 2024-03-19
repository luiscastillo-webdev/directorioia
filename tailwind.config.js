/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      sans: ['Kanit', 'sans-serif'],
      fontWeight: 400,
    },
    
    },
  },
  plugins: [],
}

