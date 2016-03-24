var gulp = require('gulp');
var util = require('gulp-util');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var concatCss = require('gulp-concat-css');

gulp.task('default', function () {
	// Fonts
	gulp.src([
			'./node_modules/bootstrap/fonts/*',
			'./node_modules/font-awesome/fonts/*'
		])
		.pipe(gulp.dest('./public/fonts'));

	// CSS
	gulp.src([
			'./node_modules/font-awesome/css/font-awesome.min.css',
			'./node_modules/bootstrap/dist/css/bootstrap.min.css',
			'./node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
		])
		.pipe(concatCss('app.css'))
		.pipe(gulp.dest('./public/css'));

	// Templates
	gulp.src('./resources/templates/*.html')
		.pipe(gulp.dest('./public/templates'));

	// JS
	browserify('./resources/assets/js/app.js')
		.bundle()
		.on('error', function (e) {
			util.log(e);
		})
		.pipe(source('app.js'))
		.pipe(gulp.dest('./public/js/'));
});