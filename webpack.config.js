const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const getFilesFromDir = require("./config/files");
const Dotenv = require('dotenv-webpack');
const PAGE_DIR = path.join("src", "pages", path.sep);

const htmlPlugins = getFilesFromDir(PAGE_DIR, [".html"]).map(filePath => {
    const fileName = filePath.replace(PAGE_DIR, "");
    // { chunks:["contact", "vendor"], template: "src/pages/contact.html",  filename: "contact.html"}
    return new HtmlWebPackPlugin({
        chunks: [
            fileName.replace(path.extname(fileName), ""),
            "vendor"
        ],
        template: filePath,
        filename: fileName
    })
});

// { contact: "./src/pages/contact.js" }
const entry = getFilesFromDir(PAGE_DIR, [".js"]).reduce((obj, filePath) => {
    const entryChunkName = filePath.replace(path.extname(filePath), "").replace(PAGE_DIR, "");
    obj[entryChunkName] = `./${filePath}`;
    return obj;
}, {});

module.exports = (env, argv) => ({
    entry: entry,
    output: {
        filename: '[name].[hash:4].js',
        path: path.resolve(__dirname, 'build')
    },
    devtool: argv.mode === 'production' ? false : 'eval-source-maps',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: process.env.PORT || 9000,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        plugins: ["@babel/plugin-proposal-class-properties"],
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react"
                        ],
                    }
                },
            },
            {
                test: /\.s?css$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    {
                        loader: "css-loader",
                        options: {modules: true}
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true, // webpack@1.x
                            disable: true, // webpack@2.x and newer
                        },
                    },
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                    }
                ]
            }
        ]
    },
    plugins: [
        new Dotenv({
            path: './.env', // load this now instead of the ones in '.env'
            safe: true, // load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
            systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
            silent: true, // hide any errors
            defaults: false // load '.env.defaults' as the default values if empty.
        }),
        ...htmlPlugins,
    ],
    optimization: {
        minimize: argv.mode === 'production',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /node_modules/,
                    chunks: "initial",
                    name: "vendor",
                    enforce: true
                }
            }
        }
    },
});