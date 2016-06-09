const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const sourcePath = path.join(__dirname, 'src');
const env = process.env.ENVIRONMENT || 'DEV';
let plugins = [];
const libraryName = 'basic-event-calendar';
let outputFileJs = libraryName + '.js';
let outputFileCss = libraryName + '.css';

if (env === 'PROD') {
    plugins = plugins.concat([
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            mangle: true,
            compress: {
                warnings: false
            }
        })
    ]);
    outputFileJs = libraryName + '.min.js';
    outputFileCss = libraryName + '.min.css';
}

plugins.push(new ExtractTextPlugin(outputFileCss, { allChunks: true }));

module.exports = {
    entry: path.join(sourcePath, 'es6/' + libraryName),
    output: {
        path: path.join(__dirname, 'lib'),
        filename: outputFileJs,
        library: 'BasicEventCalendar',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    externals: {
        'jquery': 'jQuery'
    },
    module: {
        preLoaders: [
            {
                test: /(\.es6|\.js)$/,
                loader: 'eslint'
            }
        ],
        loaders: [
            {
                test: /(\.es6|\.js)$/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
            }
        ]
    },
    resolve: {
        root: sourcePath,
        extensions: ['', '.es6', '.js', 'scss'],
        modulesDirectories: ['node_modules', 'src']
    },
    plugins: plugins,
    sassLoader: {
        includePaths: ['scss']
    }
};
