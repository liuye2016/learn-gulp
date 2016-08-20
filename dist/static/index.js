var gulp = require('gulp');

gulp.task('test',function(){

	return console.log('this is a test');
});


gulp.task('css',function(){
	return gulp.src('src/css/*.css')
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

gulp.task('build', ['css', 'js', 'html'])