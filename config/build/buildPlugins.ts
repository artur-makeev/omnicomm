import webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import type { BuildOptions } from './types.ts/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import Dotenv from 'dotenv-webpack';

export function buildPlugins({
	paths,
	isDev,
}: BuildOptions): webpack.WebpackPluginInstance[] {
	const dotenvFilename = isDev ? '.env.development' : '.env.production';
	const node_env = JSON.stringify(isDev ? 'development' : 'production');

	const plugins = [
		new HTMLWebpackPlugin({
			template: paths.html,
		}),
		new webpack.ProgressPlugin(),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css',
			chunkFilename: 'css/[name].[contenthash:8].css',
		}),
		new webpack.DefinePlugin({
			__IS_DEV__: JSON.stringify(isDev),
			'process.env.NODE_ENV': node_env,
		}),
		new Dotenv({
			path: dotenvFilename,
		}),
	];

	if (isDev) {
		plugins.push(
			new BundleAnalyzerPlugin({
				openAnalyzer: false,
			}),
		);
	}

	return plugins;
}
