/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 */

/* jshint browser: false, node: true, strict: true */

'use strict';

const UglifyJsPlugin = require( 'webpack' ).optimize.UglifyJsPlugin;
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );

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
				use: ExtractTextPlugin.extract( {
					fallback: 'style-loader',
					use: 'css-loader!sass-loader'
				} )
			},
			{
				// test: **/ckeditor5-*/theme/**/*.scss
				test: /\.css$/,
				use: ExtractTextPlugin.extract( {
					fallback: 'style-loader',
					use: 'css-loader'
				} )
			}
		]
	},

	resolve: {
		modules: [
			'node_modules'
		]
	},

	plugins: [
        new ExtractTextPlugin( 'styles.css' ),
		new UglifyJsPlugin( {
			sourceMap: true
		} )
	],

	devtool: 'source-map',
	stats: true
};
