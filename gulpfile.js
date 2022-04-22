'use strict';

// var sass = require('gulp-sass');
const sass = require('gulp-sass')(require('sass'));
var gulp = require('gulp');

gulp.task('sass', function () { 
   gulp.src('app/scss/app.scss') 
   .pipe(sass().on('error', sass.logError)) 
   .pipe(gulp.dest('css')); 
});

gulp.task('sass:watch', function() { 
   gulp.watch('sass/style.scss', ['sass']);
});
