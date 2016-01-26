/// <binding Clean='clean' />
'use strict';
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var jade = require('gulp-jade');
var watch = require('gulp-watch');
var sass = require('gulp-sass');

gulp.task('scripts', function () {
  return gulp.src('src/**/*.js') // read all of the files that are in script/lib with a .js extension
    .pipe(jshint()) // run their contents through jshint
    .pipe(jshint.reporter('default')) // report any findings from jshint
    .pipe(concat('app.js')) // concatenate all of the file contents into a file titled 'all.js'
    .pipe(gulp.dest('public/js')); // write that file to the dist/js directory
});

gulp.task('templates', function () {
  return gulp.src('src/**/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('public/views'));
});

gulp.task('sass', function () {
  gulp.src('src/scss/styles.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('public/css/'))
});

gulp.task('watch', function () {
  gulp.watch('src/**/*.jade', ['templates']);
  gulp.watch('src/**/*.scss', ['sass']);
});
