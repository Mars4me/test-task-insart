const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/p24api/pubinfo',
        createProxyMiddleware({
            target: 'https://api.privatbank.ua',
            changeOrigin: true,
        })
    );
};
