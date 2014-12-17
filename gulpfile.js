/**
 * GULPFILE
 */
'use strict';

// Modules
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    notify = require('gulp-notify'),
    sass = require('gulp-sass'),
    autoprefix = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    livereload = require('gulp-livereload');

// Dirs
var htmlDir = 'public',
    sassDir = 'build-src/scss',
    jsDir = 'build-src/js',
    compiledCSSDir = 'public/css',
    compiledJSDir = 'public/js';





/**
 * Default 'gulp' task
 * Run 'css' and 'js' on init, then watch.
 */
gulp.task('default', ['css', 'js', 'watch']);





/**
 * SASS 'css' task
 * 
 * Note: Autoprefix is stripping out the sourcemap so
 * disable while building but enable when testing
 * before pushing to production.
 */
gulp.task('css', function() {

  return gulp.src(sassDir + '/main.scss')
    .pipe(
          sass(
               {
                loadPath: __dirname + '/' + sassDir,
                style: 'compressed'
                }
               ).on('error', gutil.log))
    // .pipe(autoprefix('last 4 versions'))
    .pipe(gulp.dest(compiledCSSDir))
    .pipe(livereload())
    .pipe(notify('SCSS compiled'));
});





/**
 * WATCH
 */
gulp.task('watch', function() {
  livereload.listen();
  gulp.watch(htmlDir + '/**/*.html', ['html']);
  gulp.watch(sassDir + '/**/*.scss', ['css']);
  gulp.watch(jsDir + '/**/*.js', ['js']);
});





/**
 * HTML
 */
gulp.task('html', function() {
  return gulp.src('')
    .pipe(livereload())
    .pipe(notify('HTML changed, reloaded'));
});




/**
 * JAVASCRIPT 'js' task
 * Will concatenate an array of files.
 */
gulp.task('js', function() {
  
  var concatJsFiles = [
        // jsDir + '/vendor/plugins.js',
        jsDir + '/main.js',
  ];
  
  return gulp.src(concatJsFiles)
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(compiledJSDir))
    .pipe(livereload())
    .pipe(notify('JS minified'));
    
});
