/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        proj: {
          red: {
            DEFAULT:"#B91C1C"
          },
          yellow: {
            DEFAULT: "#A16207",
          }
        },
      }
    },
  },
  plugins: [],
}

