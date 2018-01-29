module.exports = {
    '/rest': {
        target: 'http://www.system.com',
        changeOrigin: true,
        logLevel: 'debug', // 开启debug模式  可以在控制台看到设置那些代理
        // 设置请求的header
        headers: {

        }
    }
}