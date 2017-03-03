var webpack = require('webpack');

module.exports = {
    entry: {
        index: './src/public/js/index.js',
        login: './src/public/js/login.js'
    },

    output: {
        path: '/dest/public/js',
        filename: '[name].js'
    },

    module: {
        loaders: [
            // style-loader: 加载css
            // css-loader：模块化css
            // webpack2不支持简写，一定要带上-loader
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },

            // 需要sass-loader、node-sass支持
            // node-sass下载失败，可以尝试github下载
            // 失败原因：还是镜像问题，妈蛋
            // npm install -g cnpm --registry=https://registry.npm.taobao.org
            // cnpm install node-sass 
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    },

    plugins: [
        new webpack.BannerPlugin('@author: MR.Super!')
    ]
};

