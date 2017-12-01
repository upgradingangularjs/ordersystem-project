module.exports = {
    devtool: 'source-map',
    devServer: {
        contentBase: "./src",
        port: 9000,
        proxy: {
            '/api': 'http://localhost:9001'
        }
    }
};