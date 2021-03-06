module.exports = {
  presets: ['@babel/env', '@babel/react', '@babel/preset-typescript'],
  plugins: [['@babel/plugin-proposal-class-properties', { loose: false }]],
  assumptions: {
    setPublicClassFields: false,
  },
};
