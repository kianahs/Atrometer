module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#2E7EFA",
      "dark-blue": "#3210BC",
      orange: "#EF4D1E",
      "gray-light": "#E3E3E3",
      "tooltip-green": "#CDD500",
      "tooltip-gray": "#E5E5E5",
      "light-green": "#00D896",
      "dark-red": "#B02D53",
      silver: "#c4c4c4",
      purple: "#6a0dad",
      "light-gray": "#F4F5F8",
      "blue-tooltip": "#3210BC",
    }),
    borderWidth: {
      3: "3px",
    },

    borderColor: (theme) => ({
      ...theme("colors"),
      primary: "#2E7EFA",
      secondary: "#E94927",
    }),
    textColor: (theme) => ({
      ...theme("colors"),
      primary: "#3210BE",
      secondary: "#FFF8F8",
      orange: "#EF4D1E",
      "tooltip-carousel": "rgba(0, 0, 0, 0.6)",
    }),
    fontSize: {
      base: "1.5rem",
      heading: "5rem",
      "5xl": "2rem",
      xl: "3.1875rem",
    },
    gradientColorStops: (theme) => ({
      ...theme("colors"),
      "green-apartment-fade": "rgba(228, 245, 240, 0.53)",
      "green-apartment": "#00D896",
      "blue-tower": "rgba(46, 126, 250, 0.89)",
      "blue-tower-fade": "rgba(228, 245, 240, 0.47)",
      "red-complex": "rgba(127, 2, 47, 0.64)",
      "red-complex-fade": "rgba(239, 232, 241, 0.64)",
      "blue-town": "#2582C0",
      "blue-town-fade": "rgba(161, 213, 229, 0.66)",
      white: "#FFFFFF",
      "white-fade": "#FFFFFF",
    }),
    extend: {
      backgroundImage: (theme) => ({
        "header1-image": "url( 'photos/header1.png')",
        "header2-image": "url( 'photos/header2.jpg')",
        "apartment-image": "url('photos/apartment.png')",
        "tower-image": "url('photos/tower.png')",
        "complex-image": "url('photos/complex.png')",
        "town-image": "url('photos/town.svg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
