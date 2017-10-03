'use strict';

let path = require('path');
let webpack = require('webpack');

module.exports = {
    entry: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
       './src/main.js'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        devtoolLineToLine: true
    },
    module: {
        loaders: [
            {
                test: /src\/.+.jsx?$/,
                exclude: /node_modules/,
                loaders: ['babel-loader']
            }
        ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
      hot: true,
      historyApiFallback: true,
      contentBase: './dist'
    }
}
