var gulp=require('gulp');
var sass=require('gulp-sass');
var minify=require('gulp-minify-html');
var uglify=require('gulp-uglify');
var scssSource='SCSS/**/*.scss';
var htmlSource='HTML/**/*.html';
var jsSource='js/**/*.js';
var webDev='dist/dev/';
var webPub='dist/pub/';
var imgFile='img/**/*.*'

gulp.task('compile-scss-dev', function(){
	gulp.src(scssSource)
    .pipe(sass()) 
    .pipe(gulp.dest(webDev + 'css'))
});
gulp.task('copy-html-dev', function(){
	gulp.src(htmlSource)
	.pipe(gulp.dest(webDev))
});
gulp.task('minify-html', function(){
	gulp.src(htmlSource)
	.pipe(minify())
	.pipe(gulp.dest(webPub))
});
gulp.task('minify-js', function(){
	gulp.src(jsSource)
	.pipe(minify())
	.pipe(gulp.dest(webPub + 'js'))
});
gulp.task('uglify-js', function(){
	gulp.src(jsSource)
	.pipe(uglify())
	.pipe(gulp.dest(webPub + 'js'))
});
gulp.task('compile-scss-pub', function(){
	gulp.src(scssSource)
	.pipe(sass({outputStyle: 'compressed'}))
	.pipe(gulp.dest(webPub + 'css'))
});
gulp.task('copy-js-dev', function(){
	gulp.src(jsSource)
	.pipe(gulp.dest(webDev + 'js'))
});
gulp.task("watch", function(){
	gulp.watch(scssSource, ['compile-scss-dev','compile-scss-pub']);
	gulp.watch(htmlSource,['copy-html-dev','minify-html']);
	gulp.watch(jsSource,['copy-js-dev','minify-js','uglify-js']);
});