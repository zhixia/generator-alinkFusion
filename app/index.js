var path = require('path');
var chalk = require('chalk');    //不同颜色的info
var util = require('util');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');    //yeoman弹出框
var path = require('path');
var Reactpackage = yeoman.Base.extend({
    info: function() {
        this.log(chalk.green(
            'I am going to build your app!'
        ));
    },
    generateBasic: function() {  //按照自己的templates目录自定义
        this.directory('src', 'src');    //拷贝目录
        this.directory('data', 'data');
        this.copy('package.json', 'package.json');   //拷贝文件
        // this.copy('index.html', 'index.html');
        // this.copy('README.md', 'README.md');
        this.copy('webpack.config.js', 'webpack.config.js');
    },
    generateClient: function() {
        this.sourceRoot(path.join(__dirname, 'templates'));
        this.destinationPath('./');
    },
    install: function() {      //安装依赖
        // this.installDependencies({
        //     skipInstall: this.options['skip-install']
        // });
        var done = this.async();

        this.spawnCommand('tnpm', ['install'])  //安装项目依赖
        .on('exit', function(code){
           if(code){
               done(new Error('code:' + code));
           }else{
               done();
           }
        })
        .on('error', done);
    },
    end: function() {
        this.log(yosay(
            'Your app has been created successfully!'
        ));
    }
});
module.exports = Reactpackage;