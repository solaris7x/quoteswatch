module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        material: {
          red: "#e43f5a",
          black: "#313131",
          dark: "#1b262c",
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
