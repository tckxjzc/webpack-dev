
export default class HelloWorldPlugin {
    apply(compiler) {
        compiler.hooks.emit.tap('Hello World Plugin', (
            stats /* stats is passed as an argument when done hook is tapped.  */
        ) => {
            console.log('Hello World! tap emit');
        });
        compiler.hooks.emit.tapAsync('Hello World Plugin', (compilation, callback) => {
            setTimeout(()=>{
                console.log('Hello World! tapAsync emit');
                callback();
            },3000);

        });
    }
}
