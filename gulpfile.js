/// <binding Clean='clean' />
'use strict';
var gulp = require('gulp');
var watch = require('gulp-watch');
var sass = require('gulp-sass');


gulp.task('sass', function () {
  gulp.src('src/scss/styles.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('public/css/'))
});

gulp.task('watch', function () {
  //gulp.watch('src/**/*.jade', ['templates']);
  gulp.watch('src/**/*.scss', ['sass']);
});
