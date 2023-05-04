/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        elden: ['Elden', 'sans-serif'],
        arcane : ['Arcane', 'sans-serif'],
      },
      backgroundImage: {
        'home-pattern': "url('../img/erdtree.png')",
      },
      backgroundSize: {
        'home-pattern': 'cover',
      },
    },
  },
  plugins: [],
}
