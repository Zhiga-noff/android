const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all',
        },
    };

    if (isProd) {
        config.minimizer = [new TerserPlugin()];
    }

    return config;
};

const filename = (ext) => {
    if (isDev) {
        return `[name].${ext}`;
    }
    return `[name].[hash].${ext}`;
};

const cssLoaders = (extra) => {
    const loaders = [MiniCssExtractPlugin.loader, 'css-loader'];

    if (extra) {
        loaders.push(extra);
    }

    return loaders;
};

const babelOptions = (preset) => {
    const opts = {
        presets: ['@babel/preset-env'],
    };

    if (preset) {
        opts.presets.push(preset);
    }

    return opts;
};

const devtoolIsDev = () => {
    if (isDev) {
        return 'cheap-module-source-map';
    }
};

const addHTMLPage = (namePage) => {
    const options = {
        filename: `${namePage}.html`,
        template: `./${namePage}.html`,
        minify: {
            collapseWhitespace: isProd,
        },
    };
    return options;
};

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        main: ['@babel/polyfill', './js/index.js'],
    },
    output: {
        filename: `js/${filename('js')}`,
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@modules': path.resolve(__dirname, 'src/components'),
            '@': path.resolve(__dirname, 'src'),
        },
    },
    optimization: optimization(),
    devServer: {
        static: path.resolve(__dirname, 'src'),
        port: 1000,
        compress: true,
        open: true,
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: babelOptions(),
                },
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.module\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[name]__[local]--[hash:base64:5]',
                            },
                        },
                    },
                ],
            },
            {
                test: /\.css$/i,
                exclude: /\.module\.css$/i,
                use: cssLoaders(),
            },
            {
                test: /\.module\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[name]__[local]--[hash:base64:5]',
                            },
                        },
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                exclude: /\.module\.scss$/,
                use: cssLoaders('sass-loader'),
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|webp|ico)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'img/[name][ext]',
                },
            },
        ],
    },
    devtool: devtoolIsDev(),
    plugins: [
        new HtmlWebpackPlugin(addHTMLPage('index')),
        new MiniCssExtractPlugin({
            filename: `css/${filename('css')}`,
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: 'public',
                    to: './img',
                },
            ],
        }),
    ],
};
