/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        container: "95%",
        inherit: "inherit",
      },
      height: {
        inherit: "inherit",
      },
      colors: {
        "main-green": "#0B6434",
      },
      gridTemplateColumns: {
        hero: "2fr 3fr",
        "products-grid": "repeat(auto-fit, minmax(min(256px, 100%), 1fr))",
        "footer-grid": "repeat(auto-fit, minmax(min(200px, 100%), 1fr))",
      },
      gridTemplateRows: {
        "page-layout": "auto 1fr auto",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
