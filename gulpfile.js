'use strict';

var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require("vinyl-buffer");
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

var props = { entries: [scriptsDir + mainJsFile], };
var bundler = watchify(browserify(props, watchify.args));

function handleErrors() {
    var args = Array.prototype.slice.call(arguments);
    notify.onError({
        title: "Compile Error",
        message: "<%= error.message %>"
    }).apply(this, args);
    this.emit('end'); // Keep gulp from hanging on this task
}

function bundle() {
    return bundler
        .transform(babelify, {
            "presets": [
                "es2015",
                "react"
            ],
            "plugins": [
                "transform-object-rest-spread",
                "transform-decorators-legacy"
            ]
        })
        .bundle()
        .on('error', handleErrors)
        .pipe(source(mainJsFile))
        .pipe(buffer())
        .pipe(gulp.dest(buildScriptDir));
}

gulp.task('browser-watch', function (done) {
    browserSync.reload();
    done();
});

gulp.task('buildScript', bundle);

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
    gulp.watch('css/*.css', ['buildCss']);
    gulp.watch(scriptsDir + '**/*.js', ['buildScript']);
    gulp.watch(files, ['buildOtherFiles']);
});

gulp.task('build', ['buildScript', 'buildCss', 'buildOtherFiles']);

gulp.task('default', ['buildScript', 'buildCss', 'buildOtherFiles', 'auto'], function () {
    browserSync.init({
        server: {
            baseDir: "./build/"
        }
    });

    gulp.watch('./build/**').on("change", browserSync.reload);
});