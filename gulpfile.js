//导入工具包 require('node_modules里对应模块')
var gulp = require('gulp'),    //本地安装gulp所用到的地方
    connect = require("gulp-connect"),               //即时刷新
    less = require('gulp-less'),
    cssmin = require('gulp-clean-css'),              //调用多模块（编译less后压缩css）
    autoprefixer = require('gulp-autoprefixer'),    //根据设置浏览器版本自动处理浏览器css前缀
    sourcemaps = require('gulp-sourcemaps');        //当less有各种引入关系时，编译后不容易找到对应less文件，所以需要生成sourcemap文件，方便修改

var path = 'public/',
    lessSrc = path + 'less/*.less',
    lessDest = path + 'css';

//定义任务（自定义任务名称）
//gulp.task(name[, deps], fn) 定义任务  name：任务名称 deps：依赖任务名称 fn：回调函数
//gulp.src(globs[, options]) 执行任务处理的文件  globs：处理的文件路径(字符串或者字符串数组)
//gulp.dest(path[, options]) 处理完后文件生成路径
gulp.task('less', function () {
    //编译src目录下的所有less文件,除了reset.less和test.less（**匹配src/less的0个或多个子文件夹）
    return gulp.src([lessSrc, '!' +path+ 'less/**/{reset,test}.less'])
        .pipe(sourcemaps.init())
        .pipe(less())
        //.pipe(autoprefixer())
        .pipe(cssmin())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(lessDest));    //处理完后文件生成路径
});

gulp.task('watch', function () {
    gulp.watch(path + 'less/**/*.less', ['less']);
});

gulp.task('server', function () {
    connect.server();
});

gulp.task("default", ['watch']);   //定义默认任务