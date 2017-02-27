var webpack = require('webpack');


module.exports = {
    entry: './entry.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style-loader!css-loader'}
        ]
    },
    plugins: [
        // 在bundle.js头部加上该文字
        new webpack.BannerPlugin('Hi, This is my code!!! -- ' + Date.now())
    ]
};


