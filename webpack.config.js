const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');
const exec = require('child_process').exec;

exec(`rm -fr ${__dirname}/bundle/*`, (err, stdout, stderr) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(stdout);
});

function CreateWebpackConfig(type, options) {
    let folder = (type == "js" ? "scripts" : "assets");
    let ext = (type == "js" && "js" || type == "scss" && "css");

    this.plugins = [];
    if (options.ENV == "production") {
        this.plugins.push(new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }));
        this.plugins.push(new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: {
                screw_ie8: true,
                keep_fnames: true
            },
            compress: {
                screw_ie8: true
            },
            comments: false
        }));
    }

    this.plugins.push(new webpack.DefinePlugin({
        ENV: JSON.stringify(options.ENV),
        SET: JSON.stringify(options.SET)
    }));

    this.devtool = options.ENV == "production" ? "" : "inline-source-map";

    this.module = {
        rules: []
    };

    this.resolve = {
        extensions: [
            '.', '.json', `.${type}`,
        ]
    };

    this.entry = {};

    //custom files input
    if (type == 'js') {
        this.entry['index'] = path.join(__dirname, folder, 'index');
        //this.entry['common'] = path.join(__dirname, folder, 'common');
    } else if (type == 'scss') {
        this.entry['index'] = path.join(__dirname, folder, 'index');
        //this.entry['files'] = path.join(__dirname, folder, 'files');

        this.plugins.push(new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, folder, 'index.html'),
            inject: false,
            SET: options.SET,
            minify: {
                html5: true,
                collapseWhitespace: (options.ENV == "production" ? true : false),
            }
        }));
    }

    this.output = {
        filename: '[name].' + ext,
        path: path.join(__dirname, 'bundle'),
        publicPath: ''
    }; //publicPath !!



    //this.resolve.extensions.push(".html");

    if (type == 'js') {

        this.module.rules.push({
            test: /\.js$/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: options.ENV == "production" ? ["es2015", "stage-0","react"] :  ["es2015", "stage-0","react"], //prod ["stage-0"],
                    plugins: options.ENV == "production" ? "transform-runtime" : ""
                }
            },
            exclude: /(node_modules|bower_components)/
        });

    } else if (type == 'scss') {

        this.module.rules.push({
            test: /\.(sass|scss|css)$/,
            exclude: /node_modules/,

            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [{
                    loader: 'css-loader',
                    query: {
                        minimize: options.ENV == "production" ? true : false,
                        modules: true, // enables CSS Modules spec
                        sourceMap: options.ENV == "production" ? false : true,
                        importLoaders: 1, // will import previous amount of loaders,
                        localIdentName: '[local]'
                    },
                }, {
                    loader: 'sass-loader',
                    query: {
                        sourceMap: options.ENV == "production" ? false : true,
                        sourceMapContents: options.ENV == "production" ? false : true,
                    },
                }]
            })
        });

        this.module.rules.push({
            test: /\.(jpe?g|png|gif|svg|ttf|eot|woff|woff2)$/i,
            use: {
                loader: 'file-loader',
                query: {
                    name: '[path][name].[ext]'
                }
            }
        });

        this.plugins.push(new ExtractTextPlugin({
            filename: `[name].${ext}`,
            disable: false,
            allChunks: true
        }));
    }
}


module.exports = function(options = {}) {
    console.log("options", options);
    return [
        new CreateWebpackConfig('js', options),
        new CreateWebpackConfig('scss', options)
    ];
}
