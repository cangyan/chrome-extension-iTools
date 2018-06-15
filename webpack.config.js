var path = require('path');

module.exports = {
    entry: './app/app.js',
    output: {
        path: path.resolve(__dirname, './build/js'),
        filename: 'app.js'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    plugins: [
                        "transform-object-rest-spread",
                        "transform-decorators-legacy"
                    ],
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 102400,
                        name: '[name].[ext]'
                    }
                }
            }
        ]
    }
}