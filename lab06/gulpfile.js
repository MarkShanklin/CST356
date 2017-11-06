var gulp=require('gulp');
var sass=require('gulp-sass');
var minify=require('gulp-minify-html');
var scssSource='SCSS/**/*.scss';
var htmlSource='HTML/**/*.html';
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

gulp.task('compile-scss-pub', function(){
	gulp.src(scssSource)
	.pipe(sass({outputStyle: 'compressed'}))
	.pipe(gulp.dest(webPub + 'css'))
});

gulp.task("watch", function(){
	gulp.watch(scssSource, ['compile-scss-dev','compile-scss-pub']);
	gulp.watch(htmlSource,['copy-html-dev','minify-html']);
});

gulp.task('copy-img-dev', function(){
	gulp.src(imgFile)
	.pipe(gulp.dest(webDev + 'img'))
});
gulp.task('copy-js-dev', function(){
	gulp.src(jsFile)
	.pipe(gulp.dest(webDev + 'img'))
});
gulp.task('copy-json-dev', function(){
	gulp.src(jsonFile)
	.pipe(gulp.dest(webDev + 'img'))
});