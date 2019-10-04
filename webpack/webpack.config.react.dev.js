const path = require('path');
const spawn = require('cross-spawn');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

const port = process.env.PORT || 1212;
const publicPath = `http://localhost:${port}/public`;

const config = merge.smart(baseConfig, {
  target: 'electron-renderer',

  entry: [
    ...(process.env.PLAIN_HMR ? [] : ['react-hot-loader/patch']),
    `webpack-dev-server/client?http://localhost:${port}/`,
    'webpack/hot/only-dev-server',
    require.resolve('../src/app/main.tsx'),
  ],

  devtool: 'inline-source-map',

  output: {
    publicPath,
    filename: 'react.dev.js',
  },

  module: {
    rules: [
      {
        test: /.(ts|tsx)$/,
        exclude: /node_modules/,
        include: /src/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },

  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
    extensions: ['.ts', '.tsx', '.js'],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),

    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
    }),

    new webpack.LoaderOptionsPlugin({
      debug: true,
    }),
  ],

  node: {
    __dirname: false,
    __filename: false,
  },

  devServer: {
    port,
    publicPath,
    compress: true,
    noInfo: true,
    stats: 'verbose',
    inline: true,
    lazy: false,
    hot: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    contentBase: path.join(__dirname, 'public'),
    watchOptions: {
      aggregateTimeout: 300,
      ignored: /node_modules/,
      poll: 100,
    },
    historyApiFallback: {
      verbose: true,
      disableDotRule: false,
    },
    before() {
      console.log('Starting Main Process...');
      spawn('npm', ['run', 'start:dev'], {
        shell: true,
        env: process.env,
        stdio: 'inherit',
      })
        .on('close', code => process.exit(code))
        .on('error', spawnError => console.error(spawnError));
    },
  },
});

module.exports = (env, argv) => {
  return config;
};
