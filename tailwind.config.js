/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
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
      mono: "Space Mono, monospace",
    },
    extend: {
      colors: {
        "vibrant-yellow": "#fde74c",
        seashell: "#fbeee6",
        "rich-black": "#060918",
      },
    },
  },
  plugins: [],
};
