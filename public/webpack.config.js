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
    }
};