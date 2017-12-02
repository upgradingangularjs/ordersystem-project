const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: ['ts-loader', 'angular2-template-loader'],
                exclude: [
                    /node_modules/,
                    path.resolve(__dirname, './src/main.aot.ts')
                ]
            }
        ]
    },
    devtool: 'source-map',
    devServer: {
        contentBase: "./src",
        port: 9000,
        proxy: {
            '/api': 'http://localhost:9001'
        }
    }
};