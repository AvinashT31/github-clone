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
      },
      backgroundSize: {
        '100': '100%',
      },
      width: {
        '128': '95%',
        '129': '0.4rem',
      }
    },
  },
  plugins: [],
};


