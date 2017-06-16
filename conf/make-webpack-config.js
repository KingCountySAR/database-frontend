const fs = require('fs');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = options => {
    // https://github.com/jtangelder/sass-loader/issues/99
    // https://github.com/sass/node-sass/issues/857
    process.env.UV_THREADPOOL_SIZE = 128;

    options.lint = fs.existsSync(`${__dirname}/../.eslintrc`) && options.lint !== false;

    const jsLoaders = ['babel-loader'];

    return {
        entry: ['whatwg-fetch', './app/index.js'],
        debug: !options.production,
        devtool: options.devtool,
        output: {
            path: options.production ? './dist' : './build',
            publicPath: options.production ? '/' : 'http://localhost:8080/',
            filename: options.production ? 'app.[hash].js' : 'app.js',
        },
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loaders: jsLoaders,
                },
                {
                    // Transpile JSX and ES2015
                    test: /\.jsx?$/,
                    exclude: /\/node_modules\//,
                    loaders: [
                        {
                            loader: 'babel',
                            query: {
                                presets: [
                                    'babel-preset-react',
                                    'babel-preset-es2015',
                                    'babel-preset-stage-2',
                                ].map(require.resolve),
                            }
                        },
                        {
                            // Note: this loader must remain last for js to make sure
                            // it gets untouched files
                            loader: 'eslint-loader',
                            options: {
                                // This is just a convenience; don't block loading
                                emitWarning: true,
                            },
                        }
                    ]
                },
                {
                    // Basic CSS/Sass Loaders
                    test: /\.s?css$/,
                    include: /\/(node_modules|lib)\//,
                    loader: ExtractTextPlugin.extract('css!sass'),
                },
                {
                    // CSS module CSS/Sass Loaders
                    test: /\.s?css$/,
                    exclude: /\/(node_modules|lib)\//,
                    loader: ExtractTextPlugin.extract(
                        'css?modules&localIdentName=[name]--[local]_[hash:base64:5]!sass'
                    ),
                },
                {
                    test: /\.png$/,
                    loader: 'url?limit=100000&mimetype=image/png',
                },
                {
                    test: /\.svg$/,
                    loader: 'url?limit=100000&mimetype=image/svg+xml',
                },
                {
                    test: /\.gif$/,
                    loader: 'url?limit=100000&mimetype=image/gif',
                },
                {
                    test: /\.jpg$/,
                    loader: 'file',
                },
                {
                    test: /\.json$/,
                    loader: 'json',
                },
            ],
        },
        resolve: {
            extensions: ['', '.js', '.jsx', '.sass', '.css', '.scss'],
        },
        plugins: options.production ? [
            // Important to keep React file size down
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify('production'),
                },
            }),
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false,
                },
            }),
            new ExtractTextPlugin('app.[hash].css'),
            new HtmlWebpackPlugin({
                template: './conf/tmpl.html',
                production: true,
            }),
        ] : [
            new ExtractTextPlugin('app.[hash].css'),
            new HtmlWebpackPlugin({
                template: './conf/tmpl.html',
            }),
        ],
    };
};
