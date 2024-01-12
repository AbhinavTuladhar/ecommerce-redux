/** @type {import('tailwindcss').Config} */

import fluid from 'tailwindcss-fluid-type'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        container: '95%',
        inherit: 'inherit',
      },
      height: {
        inherit: 'inherit',
      },
      backgroundPosition: {
        'left-bottom': 'left 2rem',
      },
      colors: {
        'lightmode-green': '#49a07f',
        'darkmode-green': '#0B6434',
        complementary: '#181818',
        'complementary-light': '#f8f9fa',
      },
      gridTemplateColumns: {
        hero: '2fr 3fr',
        'featured-grid': 'repeat(auto-fit, minmax(min(280px, 90%), 1fr))',
        'products-grid': 'repeat(auto-fit, minmax(min(256px, 90%), 1fr))',
        'footer-grid': 'repeat(auto-fit, minmax(min(200px, 90%), 1fr))',
        'cart-grid': '1.95fr 1fr',
      },
      gridTemplateRows: {
        'page-layout': 'auto 1fr auto',
      },
      screens: {
        xs: '576px',
      },
    },
  },
  plugins: [
    'prettier-plugin-tailwindcss',
    fluid({
      settings: {
        prefix: 'fluid-',
      },
    }),
  ],
  darkMode: 'class',
}
