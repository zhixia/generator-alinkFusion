'use strict';

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        vendor: ['react', 'react-dom'],
        home: path.join(__dirname, '/src/home/index.jsx')
    },
    output: {
        path: path.join(__dirname, '/build'),
        filename: '[name].js',
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devtool: 'inline-source-map',
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel',
            query: {
                presets: [
                    'es2015',
                    'react',
                    'stage-0'
                ],
                plugins: [
                    'add-module-exports',
                    'transform-decorators-legacy',
                ]
            },
            exclude: /node_modules/,
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('css')
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('css!fast-sass')
        }, {
            test: /\.(png|gif|jpg)$/,
            loader: 'file?name=[path][name].[ext]'
        }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'common.js'),
        new ExtractTextPlugin('[name].css')
    ]
};