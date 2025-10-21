const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const args = getParameters();
const isProduction = args.indexOf('production') !== -1;

const commonConfig = {
	mode: isProduction ? 'production' : 'development',
	entry: { toastr: './src/index.ts' },
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
					mangle: true,
					compress: { drop_console: isProduction, passes: 2 },
					output: {
						comments: /translators:|@preserve/i,
					},
				},
				extractComments: false,
			}),
			new CssMinimizerPlugin(),
		],
	},
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
					'style-loader', // Injects CSS into the DOM via <style> tags
					{
						loader: 'css-loader',
						options: {
							importLoaders: 2,
							sourceMap: !isProduction,
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

// UMD Build (for script tags and older module systems)
const umdConfig = {
	...commonConfig,
	target: 'browserslist',
	output: {
		filename: 'toastr.umd.js',
		path: path.resolve(__dirname, 'dist'),
		libraryTarget: 'umd',
		globalObject: 'this',
		library: {
			name: 'toastr',
			type: 'umd',
		},
		umdNamedDefine: true,
	},
	experiments: {
		outputModule: false,
	},
};

// ESM Build (for modern bundlers like Vite, Webpack 5, etc.)
const esmConfig = {
	...commonConfig,
	target: 'web',
	output: {
		filename: 'toastr.js',
		path: path.resolve(__dirname, 'dist'),
		library: {
			type: 'module',
		},
	},
	experiments: {
		outputModule: true,
	},
};

module.exports = [esmConfig, umdConfig];

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
