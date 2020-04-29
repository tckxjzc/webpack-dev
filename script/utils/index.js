import os from 'os';
import argv from "../config/argv.js";

export function getStyleLoader(enabledModules) {
    const cssOptions = {
        modules: enabledModules,
        localsConvention:'camelCaseOnly',
        esModule:true,
    };
    return [
        {
            loader: 'style-loader'
        },
        {
            loader: 'css-loader',
            options: cssOptions
        },
        {
            loader: 'sass-loader',
        },
    ];
}

export function getIp() {
    const ipTable = [];
    const faces = os.networkInterfaces();
    Reflect.ownKeys(faces).forEach(item => {
        faces[item].forEach(details => {
            if (details.family === 'IPv4') {
                if (details.address !== '127.0.0.1')
                    ipTable.push(details.address);
            }
        });
    });
    if (ipTable.length < 1) {
        ipTable.push('127.0.0.1');
    }
    return ipTable;
}

export function filterEntry(entries) {
    if(argv.entry.length<1){
        return  entries;
    }
    const result={};
    const names=Reflect.ownKeys(entries);
    argv.entry.forEach(item=>{
        if(!names.includes(item)) {
           throw new Error(`No such entry : ${item}`);
        }
        result[item]=entries[item];
    });
    return result;
}

export function filterTemplate(templates) {
    if(argv.entry.length<1){
        return  templates;
    }
    const result=[];

    templates.forEach(({options},index)=>{
        if(options.chunks instanceof Array){
            if(options.chunks.every(item=>argv.entry.includes(item))){
                result.push(templates[index]);
            }
        }else {
            result.push(templates[index]);
        }

    });

    return  result;
}