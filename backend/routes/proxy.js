var express = require("express");
var app = express();

const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("http://127.0.0.1:5173/", {
      target: "https://prod.liveshare.vsengsaas.visualstudio.com/",
      pathRewrite: {
        "^/api": "",
      },
      changeOrigin: true,
    })
  );
};
