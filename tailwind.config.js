/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Lato', 'sans-serif'],
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      colors: {
        superteam: {
          primary: '#5522e0',
          'primary-light': '#bcb3ff',
          secondary: '#f4a60b',
          'secondary-light': '#ffd9a1',
        },
        grizzlython: {
          black: '#161515',
          'tan-1': '#eae7dd',
          'tan-2': '#979385',
          'tan-faded': 'rgba(151,147,133,0.5)',
          peach: '#f1b994',
          red: '#ef474a',
          'red-transparent': 'rgba(239, 71, 74, 0.05)',
        },
      },
      spacing: {
        128: '32rem',
        1.75: '0.4375rem',
      },
    },
  },
  plugins: [],
};
