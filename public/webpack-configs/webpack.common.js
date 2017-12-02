const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    entry: {
        ajs: './src/app.module.ajs.ts',
        app: './src/main.ts',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../../', 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css?$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss?$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                use: 'file-loader'
            },
            {
                test: /\.html$/,
                use: 'raw-loader'
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        //new BundleAnalyzerPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: '[name].bundle.js',
            minChunks(module, count){
                var context = module.context;
                return context && context.indexOf('node_modules') >= 0;
            }
        })
    ]
};