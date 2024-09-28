const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const args = getParameters();
const isProduction = args.indexOf('production') !== -1;

module.exports = {
	mode: isProduction ? 'production' : 'development',
	target: 'browserslist',
	entry: { toastr: './src/index.ts' },
	output: {
		filename: 'toastr.js',
		path: path.resolve(__dirname, 'dist'),
		libraryTarget: 'umd',
		globalObject: 'this',
	},
	resolve: {
		extensions: ['.ts', '.js', '.scss'],
		fallback: {
			util: false,
		},
	},
	optimization: {
		minimize: isProduction,
		minimizer: [
			new TerserPlugin({
				parallel: true,
				terserOptions: {
					keep_classnames: !isProduction,
					keep_fnames: !isProduction,
					mangle: true,
					compress: { drop_console: isProduction, keep_fnames: !isProduction, keep_classnames: !isProduction, passes: 2 },
					output: {
						comments: /translators:|@preserve/i,
					},
				},
				extractComments: false,
			}),
			new CssMinimizerPlugin(),
		],
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
				test: /\.(css|sass|scss)$/,
				use: [
					!isProduction ? 'style-loader' : MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							importLoaders: 2,
							sourceMap: true,
						},
					},
					{
						loader: 'postcss-loader',
					},
					{
						loader: 'sass-loader',
						options: {
							implementation: require('sass'),
							sourceMap: !isProduction,
							sassOptions: {},
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
	devtool: isProduction ? false : 'source-map',
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
