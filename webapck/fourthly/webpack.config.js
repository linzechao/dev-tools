let path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        main: './src/index.js',
        common: './src/script/common.js'
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js'
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader'
                })
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin('css/main.css'),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common'
        })
    ],

    // 设置引入路径
    resolve: {
        alias: {
            src: 'src',
            view: 'src/view',
            components: 'src/components',
            js: 'src/script/js',
            scss: 'src/style/scss',
            css: 'src/style',
            images: 'src/assets/images',
            fonts: 'src/assets/fonts'
        }
    }
};


