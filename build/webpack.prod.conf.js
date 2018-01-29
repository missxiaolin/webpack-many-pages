const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),

        new CleanWebpackPlugin('./dist') // 删除dist重新生成
    ]
}