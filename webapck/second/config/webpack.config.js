let path = require('path'),

    // webpack
    webpack = require('webpack'),
    htmlWebpackPlugin = require('html-webpack-plugin'),

    // tools
    readSync = require('../src/lib/readDir');


// 多页面配置
const TEMPLATE = readSync.read('./src/template'),
    ENTRY = readSync.read('./src/script'),
    PAGES = []; 

// 循环生成多页面
for (let key in TEMPLATE) {
    PAGES.push(new htmlWebpackPlugin({
        filename: `${key}.html`,
        template: TEMPLATE[key],
        inject: 'head',
        chunks: [`${key}`],
    }));
}

console.log(ENTRY);

module.exports = {
    entry: ENTRY,

    // 输出
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/[name].js'
    },

    // 模块
    module: {
        rules: [
            // style-loader: 加载css
            // css-loader：模块化css
            // webpack2不支持简写，一定要带上-loader
            // ?importLoaders=1只使用1个css来渲染
            {
                test: /\.css$/,
                // loader: 'style-loader!css-loader?importLoaders=1!postcss-loader'
                /*
                loaders: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader'
                ]
                */
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function() {
                                return [
                                    require('autoprefixer')
                                ];
                            }
                        }
                    }
                ]
            },

            // 需要sass-loader、node-sass支持
            // node-sass下载失败，可以尝试github下载
            // 失败原因：还是镜像问题，妈蛋
            // npm install -g cnpm --registry=https://registry.npm.taobao.org
            // cnpm install node-sass 
            {
                test: /\.scss$/,
                // loader: 'style-loader!css-loader!sass-loader!postcss-loader'
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function() {
                                return [
                                    require('autoprefixer')
                                ];
                            }
                        }
                    },
                    'sass-loader'
                ]
            },

            // postcss-loader
            // css后处理器
            // 配合autoprefixer
            
            // less
            // loader处理是从右到左
            {
                test: /\.less$/,
                // loader: 'style-loader!css-loader!less-loader'
                
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        /*
                         * less不需要制定import引入的方式
                        options: {
                            importLoaders: 1
                        }
                        */
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function() {
                                return [
                                    require('autoprefixer')({
                                        broswers: ['last 5 versions']
                                    })
                                ];
                            }
                        }
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            noIeCompat: true
                        }
                    }
                ]
            },

            // 图片也需要被loader解析
            // file-loader
            /*
            {
                test: /\.(jpg|png|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[name]-[hash:5].[ext]'
                        }
                    }
                ]
            },
            */

            // 另一个加载图片
            // url-loader
            // 如果图片大于设置的大小，则使用file-loader
            // 否则转成base64
            // image-webpack-loader
            // 压缩图片
            {
                test: /\.(jpg|png|gif|svg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            name: 'images/[name]-[hash:5].[ext]'
                        }
                    },
                    {
                        loader: 'image-webpack-loader'
                    }
                ]
            },


            // 解析ES6
            // 耗时
            // babel-loader、babel-core
            // presets-latest = babel-preset-latest
            // ① .babelrc文件
            // ② package.json文件
            // ③ 以下方式
            {
                test: /\.js$/,
                loader: 'babel-loader',
                // 包含范围
                include: [
                    path.resolve(__dirname + '/src'),
                    path.resolve(__dirname + '/test')
                ],
                // 忽略范围
                exclude: path.resolve(__dirname + '/node_modules'),
                // 解析该标准下的语法
                query: {
                    presets: ['env']
                }
            },

            // vue
            {
                test: '\.vue$',
                use: [
                    {
                        loader: 'vue-loader'
                    }
                ]
            }
        ]
    },

    // postcss
    /*
     * 过时写法
    postcss: [
        require('autoprefixer')({
            broswers: ['last 5 versions']
        })
    ],
    */

    // 插件
    plugins: [
        new webpack.BannerPlugin('@author: MR.Super!')
    ].concat(PAGES)
};


/*
console.log(PAGES);
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

