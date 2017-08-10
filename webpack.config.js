var webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },

    module: {
        rules: [{
            test: /\.ts$/,
            loaders: [{
                loader: 'ts-loader'
            }]
        },
        {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'test.html',
        }),
        new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery'
    })
    ]
};