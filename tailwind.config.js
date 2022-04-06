module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  content: [],
  theme: {
    extend: {
      width: {
        '9/20': '45%',
      },
      colors: {
        primary: '#0D5F9A',
        secondary: '#858585',
        background: '#f5f5f5',
        link: '#346BD5',
        field: '#EAEAEA',
        icon: '#999999',
        danger: '#AF0000',
        success: '#88E15E',
        save: '#519BD0',
        'light-grey': '#B0B0B0',
        'light-red': '#E9A0A0',
        'light-green': '#9BDD7C',
        'light-blue': '#6972C3',
        'light-gray': '#EDEDED',
        'dark-gray': '#666666',
        'card-1': '#DDEFE0',
        'card-2': '#F4ECDD',
        'card-3': '#EFDADA',
        'card-4': '#DEE0EF',
        'legend-1': '#98D89E',
        'legend-2': '#F6DC7D',
        'legend-3': '#EE8484',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      },
      margin: {
        13: '3.25rem',
        15: '3.75rem',
      },
      padding: {
        13: '3.25rem',
        15: '3.75rem',
      },
      borderRadius: {
        '4xl': '1.875rem',
      },
    },
  },
    variants: {
      extend: {
        fontWeight: ['hover'],
      },
    },
  plugins: [],
};
