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
        "products-grid": "repeat(auto-fill, minmax(min(256px, 100%), 1fr))",
      },
    },
  },
  plugins: [],
};
