'use strict';

var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var notify = require("gulp-notify");
var babelify = require('babelify');
var watchify = require('watchify');
var minifyCSS = require('gulp-minify-css');
var browserSync = require('browser-sync').create();

var scriptsDir = './app/';
var cssDir = './css/';
var buildDir = './build/';
var buildScriptDir = './build/js/';
var buildCssDir = './build/css/';
var mainJsFile = 'app.js';

var files = [
    './manifest.json',
    'index.html',
    'icon.png'
];

function handleErrors() {
    var args = Array.prototype.slice.call(arguments);
    notify.onError({
        title: "Compile Error",
        message: "<%= error.message %>"
    }).apply(this, args);
    this.emit('end'); // Keep gulp from hanging on this task
}

gulp.task('browser-watch', ['buildScript', 'buildCss', 'buildOtherFiles'], function (done) {
    browserSync.reload();
    done();
});

gulp.task('buildScript', function() {
    var props = { entries: [scriptsDir + mainJsFile], };
    var bundler = browserify(props);
    bundler.transform(babelify, {presets: ['es2015', 'react']});
    var stream = bundler.bundle();
    return stream.on('error', handleErrors)
        .pipe(source(mainJsFile))
        .pipe(gulp.dest(buildScriptDir));
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
    gulp.watch('css/*.css', ['buildCss', 'browser-watch']);
    gulp.watch(scriptsDir + mainJsFile, ['buildScript', 'browser-watch']);
    gulp.watch(files, ['buildOtherFiles', 'browser-watch']);
});

gulp.task('default', ['buildScript', 'buildCss', 'buildOtherFiles', 'auto'], function () {
    browserSync.init({
        server: {
            baseDir: "./build/"
        }
    });
});