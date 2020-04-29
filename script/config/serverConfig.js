import path from "path";
import argv from "./argv.js";
import {getIp} from "../utils/index.js";

const contentBase=[ path.resolve(argv.__dirname, './static')];

if(argv.static){
    contentBase.push(path.resolve(argv.__dirname, './dist'));
}

export default {
    contentBase:contentBase,
    host: getIp()[0],
    port: argv.port,
    hot: false,
    // hotOnly: true,
    disableHostCheck: true,
    // lazy:false,
    // proxy:{
    //     '/api':{
    //         target:'http://example.com',
    //         pathRewrite:{
    //             '^/api':''
    //         },
    //         changeOrigin:true,
    //         secure:false
    //     }
    // }
}