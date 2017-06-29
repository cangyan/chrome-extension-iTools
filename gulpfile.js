'use strict';

var path = require('path');
var gulp = require('gulp');
var gutil = require("gulp-util");
var notify = require("gulp-notify");
var minifyCSS = require('gulp-minify-css');
var browserSync = require('browser-sync').create();
var webpack = require('webpack');
var webpackConfig = require("./webpack.config.js");

var scriptsDir = './app/';
var cssDir = './css/';
var buildDir = './build/';
var buildCssDir = './build/css/';

var files = [
    './manifest.json',
    'popup.html',
    'icon.png'
];

var myDevConfig = Object.create(webpackConfig);
// myDevConfig.devtool = "sourcemap";
var devCompiler = webpack(myDevConfig);

function handleErrors() {
    var args = Array.prototype.slice.call(arguments);
    notify.onError({
        title: "Compile Error",
        message: "<%= error.message %>"
    }).apply(this, args);
    this.emit('end'); // Keep gulp from hanging on this task
}

gulp.task('browser-watch', function (done) {
    browserSync.reload();
    done();
});

gulp.task('buildCss', function() {
    return gulp.src('css/*.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest(buildCssDir));
});

gulp.task('buildOtherFiles', function () {
    files.map(function (entry) {
        return gulp.src(entry)
            .pipe(gulp.dest(buildDir));
    })
});

gulp.task('auto', function () {
    gulp.watch(cssDir+'*.css', ['buildCss']);
    gulp.watch(scriptsDir + '**/*.js', ['webpack']);
    gulp.watch(files, ['buildOtherFiles']);
});

gulp.task('webpack', function (callback) {
    devCompiler.run(function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            colors: true
        }));
        callback();
    });
})

gulp.task('build', ['buildScript', 'buildCss', 'buildOtherFiles']);

gulp.task('default', ['webpack', 'buildCss', 'buildOtherFiles', 'auto'], function () {
    browserSync.init({
        server: {
            baseDir: "./build/",
            index: "popup.html"
        }
    });

    gulp.watch('./build/**').on("change", browserSync.reload);
});