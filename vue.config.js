module.exports = {
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
