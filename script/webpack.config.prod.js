import webpackMerge from 'webpack-merge';
import baseConfig from './webpack.base.js';
import {externals} from "./config/index.js";

export default webpackMerge(baseConfig,{
    externals:externals
});