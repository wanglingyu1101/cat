const proxy = require("http-proxy-middleware");
module.exports  = function (app) {
    app.use("/m", proxy({
        target: "http://m.maoyan.com",
        changeOrigin: true,
        pathRewrite: {
            "^/m": ""
        }
    }))
}