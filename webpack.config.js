var path = require('path');
let webpack = require("webpack");

module.exports = {
    entry: {
        javascript: "./src/App.js",
        html: "./index.html"
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './public')
    },
    module: {
        rules: [{
            test: /\.jsx?$/, /\.scss$/
            exclude: /node_modules/,
            use: {
                loader: 'babel',
                require.resolve('sass-loader')
            }
        }]
    }
};
