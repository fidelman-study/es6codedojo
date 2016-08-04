"use strict";

var gulp = require('gulp'),
	notify = require("gulp-notify"),
	babel = require("gulp-babel");

gulp.task("babell", function () {
  return gulp.src("src/*.js")
    .pipe(babel({
    	presets: ['es2015']
    }))
    .pipe(gulp.dest("dist"))
    .pipe(notify('ES6 Ready!'));
});


gulp.task('watch', function () {
	gulp.watch('src/*.js', ['babell']);
});

gulp.task('default', ['babell','watch']);



