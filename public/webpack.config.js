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
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    devtool: 'source-map',
    devServer: {
        contentBase: "./",
        port: 9000
    }
};