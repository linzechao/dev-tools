var webpack = require('webpack'),
    path = require('path'),
    htmlWebpackPlugin = require('html-webpack-plugin');

// 多页面配置
const ENTRY = {
    index: './src/script/index.js',
    login: './src/script/login.js',
    main: './src/script/main.js'
}, PAGES = [];


for (let key in ENTRY) {
    PAGES.push(new htmlWebpackPlugin({
        filename: `${key}.html`,
        // filename: 'main-[hash].html',
        template: 'main.html',
        inject: 'head',
        title: 'html webpack plugin title',
        date: new Date(),
        // 指定引入那些模块
        chunks: [`${key}`],
        // 排除指定模块
        // excludeChunks: ['login', 'index'],
        // 压缩
        minify: {
            // 注释
            removeComments: true,
            // 空格
            collapseWhitespace: true
        }
    }));
}

console.log(PAGES);

module.exports = {
    // 上下文
    // context: '',

    // html script引入key
    entry: ENTRY,

    // 输出
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name]-[chunkhash].js',
        // 上线前设置
        publicPath: 'http://www.waqudao.com/'
    },

    // 模块
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

    // 插件
    plugins: [
        new webpack.BannerPlugin('@author: MR.Super!'),
        /*
        new htmlWebpackPlugin({
            filename: 'main.html',
            // filename: 'main-[hash].html',
            template: 'main.html',
            inject: 'head',
            title: 'html webpack plugin title',
            date: new Date(),
            // 指定引入那些模块
            chunks: ['main'],
            // 排除指定模块
            excludeChunks: ['login', 'index'],
            // 压缩
            minify: {
                // 注释
                removeComments: true,
                // 空格
                collapseWhitespace: true
            }
        })
        */
    ].concat(PAGES)
};
