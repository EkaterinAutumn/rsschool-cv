const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const devServer = (isDev) => !isDev ? {} : {
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        open: true,
        hot: true,
        port: 8080,
    }
}

module.exports = ({ develop }) => ({
    mode: develop ? 'development' : 'production',

    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack Boilerplate',
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html',
        }),

        new CleanWebpackPlugin(),

        new CopyPlugin({
            patterns: [{
                from: './public', to: './assets'
            }],
        }),
    ],

    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        },],
    },

    ...devServer(develop),

    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    }
});