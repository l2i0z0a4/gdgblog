/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        googleBlue: "#4285F4",
        googleRed: "#EA4335",
        googleYellow: "#FBBC05",
        googleGreen: "#34A853",
      },
    },
  },
  plugins: [],
};
