const productionConfig = require('./webpack.prod.conf')
const developmentConfig = require('./webpack.dev.conf')
const merge = require('webpack-merge')
const webpack = require('webpack')
const path = require('path')

const generateConfig = env => {
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
                    use: {
                        loader: 'babel-loader'
                    },
                    exclude: '/node_modules/'
                }
            ]
        },
        plugins: [
            
        ]
    }
}

module.exports = env => {
    let config = env === 'production'
        ? productionConfig
        : developmentConfig

    return merge(generateConfig(env), config)
}