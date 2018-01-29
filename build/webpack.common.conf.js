const productionConfig = require('./webpack.prod.conf')
const developmentConfig = require('./webpack.dev.conf')
const merge = require('webpack-merge')
const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')


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
                chunks,
                template,
                filename: name + '.html'
            })
        ]
    }
}

const generateConfig = env => {
    const extractLess = new ExtractTextWebpackPlugin({
        filename: 'css/[name]-bundle-[hash:5].css',
        allChunks: false // 指定一个提取css范围
    })

    // js 操作
    const scriptLoader = []
        .concat(env === 'production'
            ? []
            : [
                {
                    loader: 'babel-loader'
                },
                {
                    loader: 'eslint-loader',
                    options: {
                        formatter: require('eslint-friendly-formatter')
                    }
                }
            ]
        )

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
                {
                    test: /\.js$/,
                    use: scriptLoader,
                    exclude: '/node_modules/'
                }
            ]
        },
        plugins: [
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