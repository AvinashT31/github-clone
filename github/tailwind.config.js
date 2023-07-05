/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        '128': '48rem',
        '138': '40rem',
        '139': '41.5rem',
        '140': '28rem',
        '141': '30rem',
        '142': '35rem',
        '143': '38.5rem',
        '144': '99%',
        '145': '44rem',
      },
      backgroundSize: {
        '100': '100%',
      },
      width: {
        '128': '95%',
        '129': '0.4rem',
        '130': '29.5rem',
        '131': '0.2rem',
      },
      colors: {
        'primary': 'rgb(46,160,67)',
      },
    },
  },
  plugins: [],
};


