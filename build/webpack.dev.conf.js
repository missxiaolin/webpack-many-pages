const webpack = require('webpack')
const proxy = require('./proxy')
const historyFallback = require('./historyfallback')

module.exports = {
    // 打开Source map 本地调试(js)
    devtool: 'cheap-module-source-map',

    devServer: {
        // inline: false, // 可以在页面看到打包状态 false
        overlay: true, // 代码检测
        port: 9001,
        // 代理
        proxy: proxy,
        hot: true,
        hotOnly: true,
        // 单页面应用路由 使用#请求的是某一个页面 使用historyApiFallback不造成浏览器刷新 直接改变history历史
        historyApiFallback: historyFallback
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),

        new webpack.NamedModulesPlugin()
    ]
}