import colors from 'colors';
import {output} from "../script/config/file";
// A JavaScript class.
export default class MyExampleWebpackPlugin {
    name="MyExampleWebpackPlugin";
    constructor(options){
        this.options=options;
        console.log(options);
    }
    // Define `apply` as its prototype method which is supplied with compiler as its argument
    apply(compiler) {
        const self=this;
        console.log('apply called---');
        // Specify the event hook to attach to
        compiler.hooks.emit.tap(self.name,
            (compilation, callback) => {
               // setTimeout(()=>{
                   console.log('This is an example plugin!'.green);
                   // console.log('Here’s the `compilation` object which represents a single build of assets:', compilation);
                   // Manipulate the build using the plugin API provided by webpack
                   // compilation.addModule(/* ... */);
                   console.log(`${self.name}--emit`.red);
                   console.log("output:"+compiler.options.output.path);
                   console.log("context:"+compiler.context);
                   // console.log(compilation.assets);
                   //获取该entry生成的文件
                   const index=compilation.entrypoints.get('index').getFiles()[0];//需要过滤，此处省略，可参考HtmlWebpackPlugin
                   // console.log(compilation.entrypoints.get('index').getFiles());
                   const assets=compilation.assets[index];
                   if(assets._source){
                       assets._source.children.splice(0,0,'//MyExampleWebpackPlugin\nconsole.log("MyExampleWebpackPlugin");\n')
                   }else if(assets._value){
                       assets._value='//MyExampleWebpackPlugin\nconsole.log("MyExampleWebpackPlugin");'+assets._value;
                   }

                   // console.log(compilation.assets[index]);
                   // RawSource
                // ConcatSource
                   // CachedSource
                   // callback();
               // },0)
            }
        );
        compiler.hooks.done.tapAsync(self.name,
            (compilation, callback) => {
                // console.log('Here’s the `compilation` object which represents a single build of assets:', compilation);
                // Manipulate the build using the plugin API provided by webpack
                // compilation.addModule(/* ... */);
                console.log(`${self.name}--done`.red);
                callback();
            }
        );
    }
}

