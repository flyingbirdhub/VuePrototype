const path = require('path');

const resolve = dir => {
    return path.join(__dirname, dir)
};

module.exports = {
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
            .set('_c', resolve('src/components'))
    },
    devServer: {
        // 自动启动浏览器
        open:true,
        hot: true,
        proxy: {
            "/api": {
                target: "http://localhost:8019/",
                changeOrigin: true,
                secure: false,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
};
