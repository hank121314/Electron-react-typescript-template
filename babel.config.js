module.exports = {
  presets: ['@babel/env', '@babel/preset-typescript', '@babel/react'],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-transform-arrow-functions',
    'react-hot-loader/babel',
  ],
};
