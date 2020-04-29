import path from 'path';
import TsConfigPathsWebpackPlugin from 'tsconfig-paths-webpack-plugin';
import {entry, plugins} from "./config/index.js";
import argv from "./config/argv.js";
import {getStyleLoader} from "./utils/index.js";
import {_includes, output} from "./config/file.js";

export default {
    entry: entry,
    mode: argv.dev ? 'none' : 'production',
    output: {
        filename:output.resource+output.filename,
        path: output.dist,
        publicPath: output.publicPath
    },
    optimization:{
        namedModules:!argv.dev
    },
    resolve: {
        plugins: [new TsConfigPathsWebpackPlugin({configFile: path.resolve(argv.__dirname, './tsconfig.json')})],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        symlinks: false
    },
    module: {
        rules: [
            {
                test: /\.(txt|glsl|vert|frag|obj|mtl)$/,
                use: 'raw-loader'
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2|ico)$/,
                loader: 'url-loader',
                options: {
                    limit: 5120,
                    outputPath: `${output.resource}/assets/`,
                    fallback:'file-loader',
                    esModule:false
                }
            },
            {
                test: /\.(js|jsx)$/,
                use: [
                    {
                        loader: 'babel-loader',
                    }
                ],
                ..._includes
            },
            {
                test: /\.(ts|tsx)$/,
                use: [

                    {
                        loader: 'babel-loader',
                    },
                    "ts-loader"
                ],
                ..._includes
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                ]
            },
            {
                test: /\.global.scss$/,
                use: getStyleLoader(false)
            },
            {
                test: (name) => {
                    if (name.indexOf('global') > -1) {
                        return false;
                    }
                    return name.endsWith('.scss');
                }
                ,
                use: getStyleLoader(true)
            }

        ]
    },
    plugins:[
        ...plugins
    ]
}