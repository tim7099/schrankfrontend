/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgwhite: (203, 213, 225),
        fzblue: "#023d6b",
        fzblue2: "adbde3",
        grey: "#7B8FA1",
        fzgrey: "#dae1e7",
      },
      backgroundImage: {
        "fz-img": "url('/src/img/backgroundimg.jpg')",
      },
    },
  },
  plugins: [],
};
