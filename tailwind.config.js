module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    content: ['./src/**/*.svelte', './src/**/*.html'],
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
