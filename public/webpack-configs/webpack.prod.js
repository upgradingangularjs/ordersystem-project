const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const extractCSS = new ExtractTextPlugin('vendor.css');
const extractSCSS = new ExtractTextPlugin('app.css');

module.exports = {
    output: {
        filename: '[name].[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.css?$/,
                use: extractCSS.extract('css-loader')
            },
            {
                test: /\.scss?$/,
                use: extractSCSS.extract(['css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                require('autoprefixer')
                            ]
                        }
                    },
                    'sass-loader'])
            }
        ]
    },
    plugins: [
        extractCSS,
        extractSCSS,
        new OptimizeCSSAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: {
                discardComments: {
                    removeAll: true
                },
                canPrint: true
            }
        }),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: '[name].[hash].js',
            minChunks(module, count) {
                var context = module.context;
                return context && context.indexOf('node_modules') >= 0;
            }
        })
    ]
};