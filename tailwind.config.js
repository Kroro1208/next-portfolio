/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        lightGray: '#d3d3d3',
        gray: '#778899',
        darkGray: '#464d53',
        darkdarkGray: '#363d42',
        pink: '#fa8072',
        green: '#13ce66',
        blue: '#1fb6ff',
        orange: '#ff7849',
        cyan: '#a5f3fc',
        amber: '#fde68a',
        emerald: '#a7f3d0',
        sky: '#7dd3fc',
        indigo: '#a5b4fc',
        rose: '#fecdd3'
      },
    },
  },
  plugins: [],
};
