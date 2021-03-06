var ExtractTextPlugin =  require('extract-text-webpack-plugin');

module.exports = {
    entry: './app/app.js',
    output: {
        path: './dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            }

        ]
    },
    plugins: [
        new ExtractTextPlugin('bundle.css')
    ]
};