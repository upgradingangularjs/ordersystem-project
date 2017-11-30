const webpack = require('webpack');

module.exports = {
    output: {
        filename: '[name].[hash].js'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: '[name].[hash].js',
            minChunks(module, count){
                var context = module.context;
                return context && context.indexOf('node_modules') >= 0;
            }
        })
    ]
};