const productionConfig = require('./webpack.prod.conf')
const developmentConfig = require('./webpack.dev.conf')
const merge = require('webpack-merge')
const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')

const generateConfig = env => {
    const extractLess = new ExtractTextWebpackPlugin({
        filename: 'css/[name]-[hash:5].css',
        allChunks: false // 指定一个提取css范围
    })

    // babel-loader
    const jsLoaders = [
        {
            loader: 'babel-loader'
        }
    ]
    // js 操作
    const scriptLoader = jsLoaders.concat(env === 'production'
        ? []
        : [
            {
                loader: 'eslint-loader',
                options: {
                    formatter: require('eslint-friendly-formatter')
                }
            }
        ]
    )

    // css-loader
    const cssLoders = [
        {
            loader: 'css-loader',
            options: {
                importLoaders: 2,
                sourceMap: env === 'development',
                minimize: true // 压缩
            }
        },
        {
            loader: 'postcss-loader',
            options: {
                ident: 'postcss',
                sourceMap: env === 'development',
                plugins: function (loader) {
                    return [
                        require('autoprefixer')(), // css代码补全
                        require('postcss-cssnext')()
                    ]
                }
            }
        },
        {
            loader: 'less-loader',
            options: {
                sourceMap: env === 'development'
            }
        }
    ]
    // css操作
    const styleLoader = env === 'production'
        ? extractLess.extract({
            fallback: {
                loader: 'style-loader',
                options: {
                    transform: './css.transform.js',
                    singleton: true,
                    outputPath: 'images/',
                    limit: 10000 // 当图片大于多少k使用路径不然使用base64
                }
            },
            use: cssLoders
        })
        : [
            {
                loader: 'style-loader',
                options: {
                    transform: './css.transform.js',
                    outputPath: 'images/',
                    limit: 10000 // 当图片大于多少k使用路径不然使用base64
                }
            }
        ].concat(cssLoders)

    // 处理文件
    const fileLoader = env === 'development'
        ? [
            {
                loader: 'file-loader',
                options: {
                    publicPath: '',
                    outputPath: 'dist/',
                    useRelativePath: true
                }
            }
        ]
        : [
            {
                loader: 'url-loader',
                options: {
                    name: '[name]-[hash:5].[ext]',
                    // publicPath: '',
                    outputPath: 'images/',
                    // useRelativePath: true,
                    limit: 10000 // 当图片大于多少k使用路径不然使用base64
                }
            }
        ]

    return {
        entry: {
            // index: './src/assets/js/index.js',
            vendor: ['vue']
        },
        output: {
            path: path.resolve(__dirname, '../dist'),
            publicPath: '/', // 发布路径
            filename: env === 'production' ? 'js/[name]-[chunkhash].js' : 'js/[name]-[hash:5].js',
        },
        module: {
            rules: [
                // 处理js
                {
                    test: /\.js$/,
                    include: [[path.resolve(__dirname, '..', 'src')]],
                    use: scriptLoader,
                    exclude: '/node_modules/'
                },
                // 处理css
                {
                    test: /\.less$/,
                    use: styleLoader
                },
                // 处理图片
                {
                    test: /\.(png|jpg|jpeg|gif)$/,
                    use: fileLoader.concat({
                        loader: 'img-loader', // 压缩图片
                        options: {
                            pngquant: {
                                quality: 80
                            }
                        }
                    })
                },
                // 处理字体
                {
                    test: /\.(eot|woff2|woff|ttf|svg)$/,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                publicPath: '',
                                outputPath: 'dist/',
                                useRelativePath: true,
                                limit: 5000 // 当图片大于多少k使用路径不然使用base64
                            }
                        }
                    ]
                },
                // 处理图片
                {
                    test: /\.html$/,
                    use: [
                        {
                            loader: 'html-loader',
                            options: {
                                attrs: ['img:src', 'img:data-src'] // 懒加载情况
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            extractLess,
            new webpack.NamedChunksPlugin(),
            new webpack.NamedModulesPlugin(),
            // new HtmlWebpackPlugin({
            //     filename: 'index.html', // 名称
            //     template: './src/pages/index.html',
            //     minify: {
            //         collapseWhitespace: true // 压缩html
            //     }
            // }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
                minChunks: Infinity
            }),

            new webpack.optimize.CommonsChunkPlugin({
                name: 'manifest'
            })
        ]
    }
}

// 生成每个页面的配置
const generatePage = function ({
    // 配置
    entry = '',
    // 模板
    template = '',
    // 打包后的名称
    name = '',
    chunks = []
} = {}) {
    return {
        entry,
        plugins: [
            new HtmlWebpackPlugin({
                filename: name + '.html', // 名称
                template: template,
                minify: {
                    // collapseWhitespace: true // 压缩html
                },
                chunks
            })
        ]
    }
}

const pages = [
    generatePage({
        entry: {
            index: './src/assets/js/index.js'
        },
        template: './src/pages/index.html',
        name: 'index',
        chunks: ['vue', 'index']
    }),
    generatePage({
        entry: {
            artive: './src/assets/js/artive.js'
        },
        template: './src/pages/artive.html',
        name: 'artive',
        chunks: ['vue', 'artive']
    })
]

module.exports = env => {
    let config = env === 'production'
        ? productionConfig
        : developmentConfig

    let defaultConfig = generateConfig(env)

    return merge(merge([defaultConfig].concat(pages)), config)
}