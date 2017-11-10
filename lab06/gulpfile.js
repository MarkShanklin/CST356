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
var jsFile='js/**/*.*'
var jsonFile='json/**/*.*'

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
gulp.task('copy-img-dev', function(){
	gulp.src(imgFile)
	.pipe(gulp.dest(webDev + 'img'))
});
gulp.task('copy-js-dev', function(){
	gulp.src(jsFile)
	.pipe(gulp.dest(webDev + 'js'))
});
gulp.task('copy-json-dev', function(){
	gulp.src(jsonFile)
	.pipe(gulp.dest(webDev + 'json'))
});
gulp.task('copy-img-pub', function(){
	gulp.src(imgFile)
	.pipe(gulp.dest(webPub + 'img'))
});
gulp.task('copy-js-pub', function(){
	gulp.src(jsFile)
	.pipe(gulp.dest(webPub + 'js'))
});
gulp.task('copy-json-pub', function(){
	gulp.src(jsonFile)
	.pipe(gulp.dest(webPub + 'json'))
});
gulp.task("watch", function(){
	gulp.watch(scssSource, ['compile-scss-dev','compile-scss-pub']);
	gulp.watch(htmlSource,['copy-html-dev','minify-html']);
	gulp.watch(jsSource,['copy-js-dev', 'copy-json-dev']);
});