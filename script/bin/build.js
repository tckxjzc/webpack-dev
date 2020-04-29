
require('@babel/register');
const webpack=require('webpack');
const webpackConfig=require('../webpack.config.prod').default;
const fileConfig=require('../config/file');
const del=require('del');


function pack(){
    webpack(webpackConfig, function (err, status) {
        if (err) {
            console.log(err);
        }else {
            console.log(status.toString());
        }
    });
}
if(fileConfig.delOldFile){
    del([fileConfig.output.dist+'/**/*'],{force:true}).then(paths=>{
        console.log('Deleted files and folders:\n', paths.join('\n'));
        pack();
    });
}else {
    pack();
}



