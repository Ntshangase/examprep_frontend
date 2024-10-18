const webpack = require('webpack');

module.exports = {
    resolve: {
        fallback: {
            path: require.resolve('path-browserify'),
            buffer: require.resolve('buffer/'),
        },
    },
    plugins: [
        new webpack.ProvidePlugin({
            Buffer: ['buffer', 'Buffer'],
        }),
    ],
};
