'use strict';

var babelify = require('babelify');
var browserify = require('browserify');
var del = require('del');
var derequire = require('gulp-derequire');
var gulp = require('gulp');
var gutil = require('gulp-util');
var autoprefixer = require('gulp-autoprefixer');
var jshint = require('gulp-jshint');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');
var jscs = require('gulp-jscs');
var streamify = require('gulp-streamify');
var stylish = require('gulp-jscs-stylish');
var uglify = require('gulp-uglify');


var PLAYER_NAME = 'vpoll-player';

gulp.task('clean', function(cb) {
  del('dist/**/*', cb);
});

gulp.task('lint', function() {
  return gulp.src(['src/**/*.js'])
    .pipe(jshint({ esnext: true }))
    .pipe(jscs({ esnext: true }))
    .pipe(stylish.combineWithHintResults())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('js', ['lint', 'clean'], function() {
  return browserify({ debug: true, standalone: PLAYER_NAME })
    .transform(babelify.configure({}))
    .require('./src/' + PLAYER_NAME + '.js', { entry: true })
    .external('video.js') // videojs dependency should be provided by consuming module, and is not included in our plugin bundle
    .bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source(PLAYER_NAME + '.js'))
    .pipe(derequire()) // replaces "require()" with "_dereq_()" in bundled unminified code, otherwise consuming CommonJS environments get tripped up
    .pipe(gulp.dest('dist'))
    .pipe(rename(PLAYER_NAME + '.min.js'))
    .pipe(streamify(uglify()))
    .pipe(gulp.dest('dist'));
  }
);

gulp.task('css', ['lint', 'clean'], function() {
  return gulp.src('./src/' + PLAYER_NAME + '.less')
    .pipe(less({ paths: ['./src'] }))
    .pipe(autoprefixer())
    .pipe(gulp.dest('dist'))
    .pipe(rename(PLAYER_NAME + '.min.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('dist'));
});

/*
gulp.task('test:start', function(done) {
  karma.start({
    configFile: __dirname + '/karma.conf.js',
    singleRun: false
  }, done);
});

gulp.task('test', function(done) {
  karma.start({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done);
});

*/

gulp.task('dev', ['js', 'css'], function()  {
  gulp.watch('./src/**/*', ['js', 'css']);
});

// gulp.task('dev:test', ['test:start']);

gulp.task('default', ['js', 'css']);