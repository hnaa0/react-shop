/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      height: {
        162: "42rem",
      },
      minWidth: {
        96: "24rem",
      },
      zIndex: {
        100: "100",
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/line-clamp")],
  daisyui: {
    theme: ["light", "dark"],
  },
};
