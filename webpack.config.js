var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
})
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractStyles = new ExtractTextPlugin('dist/style.css', {allChunks: true})

module.exports = {
    entry: [
        'babel-polyfill',
        './app/index.js'
    ],
    output: {
        path: __dirname + '/dist',
        filename: "index_bundle.js"
    },
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass')
            }
        ]
    },
    plugins: [
        HtmlWebpackPluginConfig,
        extractStyles
    ]
}
