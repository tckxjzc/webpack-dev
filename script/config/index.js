import path from 'path';
import webpack from "webpack";
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import argv from "./argv.js";
import {enabledCopyPlugin} from './file.js';
import {filterEntry, filterTemplate} from "../utils/index.js";
import HelloWorldPlugin from "../../plugins/HelloWorldPlugin";
import MyExampleWebpackPlugin from "../../plugins/MyExampleWebpackPlugin";
import TampermonkeyWebpackPlugin from "../../plugins/TampermonkeyWebpackPlugin.js";

const {__dirname} = argv;


//file entry
export const entry = filterEntry({
    'index': path.resolve(__dirname, './src/index'),
    'test': path.resolve(__dirname, './test/index'),
});


const baseTemplate = path.resolve(__dirname, './template/index.ejs');
//dev output
const devHtmlList = [
    new HtmlWebpackPlugin({
        template: baseTemplate,
        filename: `index.html`,
        inject: false,
        chunks: ['index'],
        chunksSortMode: 'manual'
    })
];
//prods output
const prodsHtmlList = [
    new HtmlWebpackPlugin({
        template: baseTemplate,
        filename: `index.html`,
        inject: false,
        chunks: ['index'],
        chunksSortMode: 'manual'
    })
];

const htmlList = filterTemplate(argv.dev ? devHtmlList : prodsHtmlList);

const pluginList = [...htmlList];
//copy files
if (enabledCopyPlugin && !argv.dev) {
    pluginList.push(
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, './static'),
                to: path.resolve(__dirname, './dist')
            }
        ])
    );
}
//plugins  顺序执行 异步除外
export const plugins = [
    new webpack.DefinePlugin({
        'DEVELOPMENT': JSON.stringify(argv.dev)
    }),
    // new HelloWorldPlugin(),
    // new MyExampleWebpackPlugin({name:'example'}),
    new TampermonkeyWebpackPlugin({
        entryName:'index',
        headerFile:path.resolve(__dirname,'./src/index.header.js')
    }),
    ...pluginList
];

//externals
export const externals = {
    // 'react': 'React',
    // 'react-dom': 'ReactDOM',
    // 'react-router-dom': 'ReactRouterDOM',
    // 'jquery': '$',
    // 'moment': 'moment',
    // 'swiper':'Swiper',
    // 'mobx': 'mobx',
    // 'mobx-react': 'mobxReact',
};