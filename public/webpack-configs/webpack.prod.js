const webpack = require('webpack');
const path = require('path');
const ngToolsWeback = require('@ngtools/webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const extractCSS = new ExtractTextPlugin('vendor.css');
const extractSCSS = new ExtractTextPlugin('app.css');

module.exports = {
    entry: {
        app: './src/main.aot.ts'
    },
    output: {
        filename: '[name].[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: '@ngtools/webpack',
                exclude: [
                    /node_modules/,
                    path.resolve(__dirname, './src/main.ts')
                ]
            },
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
        new ngToolsWeback.AotPlugin({
            tsConfigPath: './tsconfig.aot.json',
            entryModule: path.resolve(__dirname, '../src/app.module.ts#AppModule')
        }),
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