//includes
import path from "path";
import argv from "./argv.js";

const {__dirname}=argv;

export const enabledCopyPlugin=argv.copy;//default is false
export const delOldFile=argv.del;//default is false

//path of output file
const fileNameEnabledHash = argv.hash;//default is false
export const output = {
    dist: path.resolve(__dirname, './dist'),
    resource: 'resource',
    filename: fileNameEnabledHash ? `/[hash].js` : `/[name].js`,
    publicPath: '/'
};

//include files path
export const _includes = {
    include: [
        path.resolve(__dirname, './src'),
    ]
};


export const htmlMinify={
    removeComments: true, //清除HTML注释
    collapseWhitespace: true, //压缩HTML
    collapseBooleanAttributes: true, //省略布尔属性的值 <input checked="true"/> ==> <input checked />
    removeEmptyAttributes: false, //删除所有空格作属性值 <input id="" /> ==> <input />
    removeScriptTypeAttributes: true, //删除<script>的type="text/javascript"
    removeStyleLinkTypeAttributes: false, //删除<style>和<link>的type="text/css"
    minifyJS: true, //压缩页面JS
    minifyCSS: true //压缩页面CSS
}