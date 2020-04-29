import fs from 'fs';

/**
 * 为Tampermonkey用的js添加头部信息
 */
export default class TampermonkeyWebpackPlugin {
    name = "ConcatWebpackPlugin";
    headerMtime = null;

    constructor(options) {
        this.options = options;
    }

    apply(compiler) {
        const self = this;
        const {entryName, headerFile} = this.options;
        if (!fs.existsSync(headerFile)) {
            throw new Error(`No Such File : ${headerFile}`);
        }
        compiler.hooks.emit.tap(self.name, (compilation) => {
            self.readHeader();
            const entry=compilation.entrypoints.get(entryName);
            if(entry){
                const entryFiles=entry.getFiles();

                const entries=entryFiles.filter(item=>item.endsWith('.js'));
                entries.forEach(item=>{
                    const asset=compilation.assets[item];

                    if(asset._source){
                        asset._source.children.splice(0,0,self.header);
                    }else if(asset._value){
                        asset._value=self.header+asset._value;
                    }
                });
            }


        });
    }

    readHeader() {
        const {headerFile} = this.options;
        const headerMtime = fs.statSync(headerFile).mtime.toString();
        if (headerMtime === this.headerMtime) {
            return
        }
        this.headerMtime = headerMtime;
        this.header = fs.readFileSync(headerFile, {encoding: 'utf8'})+'\n';
    }
}