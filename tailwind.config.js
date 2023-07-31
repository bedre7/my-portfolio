/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontfamily: {
        sans: ["Ubuntu", "sans-serif"],
        gamy: ["Press Start 2P", "cursive"],
      },
    },
  },
  plugins: [],
};
