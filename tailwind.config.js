/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      zIndex: {
        999: "999",
        998: "998",
      },
    },
  },
  darkMode: "class",
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
  ],
};
