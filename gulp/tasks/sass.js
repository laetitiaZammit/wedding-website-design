/*--------------------------------------------------------------
    COMPILES ALL FILES _scss
--------------------------------------------------------------*/
'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

// tasks
gulp.task('sass', function () {
  gulp.src('../src/sass/**/*.scss')
    .pipe(sass().on('Error Sintaxe', sass.logError))
    .pipe(gulp.dest('../static/css/'))
});
