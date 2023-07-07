/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      inter: [
        "Inter",
        "system-ui",
        "Avenir",
        "Helvetica",
        "Arial",
        "sans-serif",
      ],
      courier: "Courier New, Courier, monospaces",
    },
    extend: {
      colors: {
        "vibrant-yellow": "#fde74c",
      },
    },
  },
  plugins: [],
};
