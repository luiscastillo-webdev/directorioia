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
      fontWeight: 200,
    },
    backgroundImage: {
        'hero-pattern': "url('./assets/ciudadia.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
    
    },
  },
  plugins: [],
}

