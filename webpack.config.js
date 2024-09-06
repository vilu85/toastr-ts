const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const args = getParameters();

module.exports = {
  mode: args.indexOf('production') !== -1 ? 'production' : 'development',
  entry: './src/index.ts', // Your entry point
  output: {
    filename: 'toastr.js', // The output bundle file
    path: path.resolve(__dirname, 'dist'), // The output directory
  },
  resolve: {
    extensions: ['.ts', '.js', '.scss'], // Resolve these file extensions,
    fallback: {
      util: false,
    },
  },
  optimization: {
    minimize: args.indexOf('production') !== -1,
    // js and css minimizer
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true,
          },
          mangle: true,
        },
      }),
      new CssMinimizerPlugin()],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.ts$/, // Transform TypeScript files
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              // Prefer `dart-sass`
              implementation: require("sass"),
              sourceMap: false,
              sassOptions: {
              },
            },
          },
        ],
      },
      {
        test: /\.(gif|png|jpe?g)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              emitFile: false,
              name: '[path][name].[ext]',
              publicPath: (url, resourcePath, context) => {
                return '../';
              },
            },
          },
        ],
      },
    ],
  },
  devtool: 'source-map', // Generate source maps
};

function getParameters() {
  var args = [];
  Object.keys(process.env).forEach(function (key) {
    if (key.startsWith('npm_config_')) {
      var arg = key.substring('npm_config_'.length);
      args.push(arg);
    }
  });

  if ('production' === process.env['NODE_ENV']) {
    args.push('production');
  }

  return args;
}