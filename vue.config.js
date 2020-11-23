module.exports = {
    devServer: {
        overlay: {
            warnings: false,
            errors: false
        },
    },
    lintOnSave: false,
    configureWebpack: {
        externals: {
            "BMap": "BMap"
        }
    }
}
