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
    sourcemaps = require('gulp-sourcemaps'),
    livereload = require('gulp-livereload');

// Dirs
var htmlDir = '../',
    sassDir = 'BuildSource/scss',
    jsDir = 'BuildSource/js',
    compiledCSSDir = htmlDir + 'css',
    compiledJSDir = htmlDir + 'js';





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
    .pipe(sourcemaps.init())
    .pipe(
          sass({
                  loadPath: __dirname + '/' + sassDir,
                  style: 'compressed',
                  errLogToConsole: false,
                  onError: function(err) {
                      return notify().write(err);
                  }
                })
          )
    // .pipe(autoprefix('last 4 versions'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(compiledCSSDir))
    .pipe(livereload())
    .pipe(notify('SCSS compiled'));
});





/**
 * WATCH
 * This task will initiate the LiveReload server and
 * watch the .html .scss and .js files to run their tasks.
 */
gulp.task('watch', function() {
  
  livereload.listen();
  gulp.watch(htmlDir + '/**/*.html', ['html']);
  gulp.watch(sassDir + '/**/*.scss', ['css']);
  gulp.watch(jsDir + '/**/*.js', ['js']);
});





/**
 * HTML
 * This task simply send the livereload command
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
        // Add your plugins etc. here to be concat. Eg:
        // jsDir + '/plugins/bxslider.js',
        jsDir + '/main.js',
  ];
  
  return gulp.src(concatJsFiles)
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(compiledJSDir))
    .pipe(livereload())
    .pipe(notify('JS minified'));
    
});
