/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "fz-blue": "#023d6b",
      },
      backgroundImage: {
        "fz-img": "url('/src/img/backgroundimg.jpg')",
      },
    },
  },
  plugins: [],
};
