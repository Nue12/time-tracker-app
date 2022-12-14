/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          'Blue': 'hsl(246, 80%, 60%)',
          'Light-orange': 'hsl(15, 100%, 70%)',          // work
          'Soft-blue': 'hsl(195, 74%, 62%)',          // play
          'Light-red': 'hsl(348, 100%, 68%)',        // study
          'Lime-green': 'hsl(145, 58%, 55%)',     // exercise
          'Violet': 'hsl(264, 64%, 52%)',           // social
          'Soft-orange': 'hsl(43, 84%, 65%)',    // self care
        },
        neutral: {
          'Very-dark-blue': 'hsl(226, 43%, 10%)',
          'Dark-blue': 'hsl(235, 46%, 20%)',
          'Desaturated-blue': 'hsl(235, 45%, 61%)',
          'Pale-Blue': 'hsl(236, 100%, 87%)',
        }
      }
    },
  },
  plugins: [],
}
