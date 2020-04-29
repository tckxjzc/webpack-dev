// import "@babel/register";
// import webpack from "webpack";
// import WebpackDevServer from 'webpack-dev-server';
// import webpackDevConfig from '../../webpack.config.js';
// import serverConfig from "../config/serverConfig.js";

require('@babel/register');
const webpack=require('webpack');
const WebpackDevServer=require('webpack-dev-server');
const webpackDevConfig=require('../../webpack.config').default;
const serverConfig=require('../config/serverConfig').default;
const argv=require('../config/argv').default;
const utils=require('../utils/index');

const compiler=webpack(webpackDevConfig);
const server=new WebpackDevServer(compiler,serverConfig);
server.listen(argv.port,utils.getIp(), err=> {
    if(err){
        console.log(err);
    }
});


