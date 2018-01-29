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
    const scriptLoader = []
        .concat(env === 'production'
            ? jsLoaders
            : jsLoaders
                .concat(jsLoaders)
        )
    
    // css-loader
    const cssLoders = [
        {
            loader: 'css-loader',
            options: {
                importLoaders: 2,
                sourceMap: env === 'development',
                minimize: true, // 压缩
                modules: true
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
                loader: 'style-loader'
            },
            use: cssLoders
        })
        : [
            {
                loader: 'style-loader'
            }
        ].concat(cssLoders)

    return {
        entry: {
            index: './src/assets/js/index.js'
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
                    use: scriptLoader,
                    exclude: '/node_modules/'
                },
                // 处理css
                {
                    test: /\.less$/,
                    use: styleLoader
                }
            ]
        },
        plugins: [
            extractLess,
            new HtmlWebpackPlugin({
                filename: 'index.html', // 名称
                template: './src/pages/index.html',
                minify: {
                    // collapseWhitespace: true // 压缩html
                }
            })
        ]
    }
}

module.exports = env => {
    let config = env === 'production'
        ? productionConfig
        : developmentConfig

    return merge(generateConfig(env), config)
}