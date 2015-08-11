var gulp = require('gulp'),
    ejs = require('gulp-ejs'),
    rename = require('gulp-rename'),
    gutil = require('gulp-util'),
    beautify = require('gulp-beautify')
    uglify = require('gulp-uglify');

gulp.task('sjs', function() {
    return gulp.src('./src/s.cookie.js')
            .pipe(beautify())
            .pipe(gulp.dest('./prod/'));
});

 
gulp.task('compress', ['sjs'], function() {
    return gulp.src('./prod/s.cookie.js')
            .pipe(uglify())
            .pipe(rename('s.cookie.min.js'))
            .pipe(gulp.dest('./prod/'));
});

gulp.task('html', function(){
    return gulp.src(['./src/test/**'])
    .pipe(gulp.dest('./prod/test/'));
});

gulp.task('move', ['sjs', 'compress', 'html'], function() {
  return gulp.src('./prod/**')
    .pipe(gulp.dest('C:/xampp/htdocs/sjs-cookie/'));
});

gulp.task('watch', function() {   
    gulp.watch(['./src/*.js', './src/modules/**'], ['sjs', 'compress']);
    gulp.watch('./src/test/**', ['html']);
});

gulp.task('default', ['watch', 'sjs', 'compress', 'html', 'move'], function() {});

