const HtmlWebpackPlugin = require('html-webpack-plugin'),
    webpack = require('webpack'),
    path = require('path');

module.exports = {
    entry: {
        home: './src/script/index.js',
        login: './src/script/public/login.js'
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        // filename: '[name]-[hash].js'
        filename: 'js/[name].js'
    },

    module: {
        rules: [
            {test: /\.vue$/, use: 'vue-loader'},

            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                },
                // 使用缓存转换、听说速度快2倍、但是报错了？
                // cacheDirectory: true
            }
        ]
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({template: './src/view/index.html'})
    ],

    // 设置引入路径
    resolve: {
        alias: {
            src: path.resolve(__dirname, 'src/'),
            view: path.resolve(__dirname, 'src/view/'),
            js: path.resolve(__dirname, 'src/script/js/'),
            scss: path.resolve(__dirname, 'src/style/scss/'),
            components: path.resolve(__dirname, 'src/components/'),
            images: path.resolve(__dirname, 'src/assets/images/'),
            fonts: path.resolve(__dirname, 'src/assets/fonts/')
        }
    }
};

