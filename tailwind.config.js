/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light': '#ffff'
      },
      backgroundImage: {
        'default': "url('./assets/backgrounds/default.jpg')",
        'sunny': "url('./assets/backgrounds/sunny.jpg')",
        'windy': "url('./assets/backgrounds/windy.jpg')",
        'stormy': "url('./assets/backgrounds/stormy.jpg')",
        'cloudy': "url('./assets/backgrounds/cloudy.jpg')",
        'haze': "url('./assets/backgrounds/haze.jpg')",
        'mist': "url('./assets/backgrounds/mist.jpg')",
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}