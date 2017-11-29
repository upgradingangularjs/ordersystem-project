module.exports = {
    entry: './app.ts',
    output: {
        filename: './dist/bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css?$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                use: 'file-loader'
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    devtool: 'source-map',
    devServer: {
        contentBase: "./",
        port: 9000,
        proxy: {
            '/api': 'http://localhost:9001'
        }
    }
};