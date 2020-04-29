import commander from "commander";

const program = commander.program;
program
    .version('1.0.0')
    //是否为开发者模式，default
    .option('-d,--dev', 'enabled dev mode',false)
    .option('-p,--port <number>', 'server port','8070')
    .option('--del', 'delete old files',false)
    .option('--copy', 'copy static folder',false)
    .option('--static', 'only start static server',false)
    .option('--hash', 'filename enabled hash',false)
    //过滤entry,仅包含指定的entry，多个用','分割
    .option('-e,--entry <item>', 'entry',(value)=>value.split(','),[]);
program.parse(process.argv);


export default {
    __dirname:process.cwd(),
    dev:program.dev,
    port:program.port,
    entry:program.entry,
    copy:program.copy,
    del:program.del,
    hash:program.hash,
    static:program.static,
};