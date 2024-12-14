/** @type {import('tailwindcss').Config} */

import gap_divide from "tailwind-gap-divide";

module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'lato': ['"Lato"', 'sans-serif'],
        'chakra': ['"Chakra Petch"', 'sans-serif'],
      },
      colors: {
        primary: '#8857F2',
        secondary: '#7A5FD9',
        ascent: '#5327F2',

        info: {
          500: '#31b0ff',
          400: '#7e7fe0',
        },
        success: {
          500: '#2FBF81',
          400: '#007786',
        },
        warning: {
          500: '#ffb74d',
          400: '#c25450',
        },
        error: {
          500: '#EB1F5D',
          400: '#ff5fa4',
        },

        dark: {
          900: '#00020D',
          800: '#0D1026',
          700: '#151B40',
        },

        light: {
          100: '#F2F2F2',
          200: '#CED7F2',
          300: '#282D44',
        },

        offwhite: '#FAF9F6',
        ghostwhite: '#F8F8FF',
        whisper: '#ECECEC',
      },
      fontSize: {
        '3xl': '32px',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(-15deg, #0D1026, #151B4000 20%, #151B4000 80%, #00020D)',
      },
    },
  },
  plugins: [gap_divide],
}

