var gulp=require('gulp');
var sass=require('gulp-sass');
var minify=require('gulp-minify-html');
var scssSource='SCSS/**/*.scss';
var htmlSource='HTML/**/*.html';
var webDev='dev/';

gulp.task('compile-scss-dev', function(){
	gulp.src(scssSource)
	.pipe(sass()) //Put this as a parameter to sass() to compress output:  { outputStyle: 'compressed' }
	.pipe(gulp.dest(webDev + 'css'))
});

gulp.task('copy-html-dev', function(){
	gulp.src(htmlSource)
	.pipe(gulp.dest(webDev + 'css'))
});

gulp.task('minify-html', function(){
	gulp.src('./html/*.html')
	.pipe(minify())
	.pipe(gulp.dest('./pub'))
});

gulp.task("watch", function(){
	gulp.watch(scssSource, ['compile-scss-dev']);
	gulp.watch(htmlSource,['copy-html-dev']);
});