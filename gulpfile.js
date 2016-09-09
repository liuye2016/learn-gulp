var gulp = require('gulp');
var sass = require('gulp-sass');


gulp.task('sass',function(){
	return gulp.src('src/sass/*.sass')
	.pipe(sass({
		outputStyle:'compressed'
	}))
	.pipe(gulp.dest('dist/static'))
})
gulp.task('js', function () {
  return gulp.src('src/js/*.js')
  .pipe(gulp.dest('dist/static'))
})

gulp.task('html', function () {
  return gulp.src('src/tpl/*.html')
  .pipe(gulp.dest('dist'))
})

gulp.task('build', ['sass', 'js', 'html']);

gulp.task('watch',function(){
	gulp.watch('sass/*.scss',['sass']);
});

gulp.task('go',['watch','sass']);