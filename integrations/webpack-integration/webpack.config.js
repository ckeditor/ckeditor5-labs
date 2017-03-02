/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 */

/* jshint browser: false, node: true, strict: true */

'use strict';

const UglifyJsPlugin = require( 'webpack' ).optimize.UglifyJsPlugin;

module.exports = {
	context: __dirname,
	target: 'web',

	entry: [
		'regenerator-runtime/runtime',
		'./app'
	],

	output: {
		path: './build',
		filename: 'app.bundle.js'
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					{
						loader: 'babel-loader',
						query: {
							presets: [ require( 'babel-preset-es2015' ) ]
						}
					}
				]
			},
			{
				// test: **/ckeditor5-*/theme/icons/*.svg
				test: /ckeditor5-[^/]+\/theme\/icons\/[^/]+\.svg$/,
				use: [ 'raw-loader' ]
			},
			{
				// test: **/ckeditor5-*/theme/**/*.scss
				test: /\.scss$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							minimize: true
						}
					},
					'sass-loader'
				]
			}
		]
	},

	resolve: {
		modules: [
			'node_modules'
		]
	},

	plugins: [
		new UglifyJsPlugin( {
			sourceMap: true
		} )
	],

	devtool: 'source-map',
	stats: true
};
