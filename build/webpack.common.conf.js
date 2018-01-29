const productionConfig = require('./webpack.prod.conf')
const developmentConfig = require('./webpack.dev.conf')

const merge = require('webpack-merge')
const webpack = require('webpack')

const generateConfig = env => {

}

module.exports = env => {
    let config = env === 'production'
        ? productionConfig
        : developmentConfig

    return merge(generateConfig(env), config)
}