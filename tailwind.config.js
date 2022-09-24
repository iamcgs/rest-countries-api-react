/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        nunitoSans: ['Nunito Sans', 'sans-serif'],
      },
      colors: {
        // (Dark Mode Elements)
        darkBlue: 'hsl(209, 23%, 22%)',
        // (Dark Mode Background)
        veryDarkBlueDM: 'hsl(207, 26%, 17%)',
        // (Light Mode Text)
        veryDarkBlueLM: 'hsl(200, 15%, 8%)',
        // (Light Mode Input)
        darkGray: 'hsl(0, 0%, 52%)',
        // (Light Mode Background)
        veryLightGray: 'hsl(0, 0%, 98%)',
        // (Dark Mode Text & Light Mode Elements)
        whiteClr: 'hsl(0, 0%, 100%)',
      },
    },
  },
  plugins: [],
};
