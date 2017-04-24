var gulp = require('gulp');

var jade = require('gulp-jade');
var autoprefixer = require('gulp-autoprefixer');

var rename = require('gulp-rename');
var replace = require('gulp-replace-task');
var sass = require('gulp-sass');

var browserSync = require('browser-sync');
var reload      = browserSync.reload;

gulp.task('images', function() {
    gulp.src('images/**/*')
    .pipe(gulp.dest('./dist/images/'))
});

gulp.task('fonts', function() {
    gulp.src('fonts/**/*')
    .pipe(gulp.dest('./dist/fonts/'))
});

gulp.task('js', function() {
    gulp.src('js/**/*')
    .pipe(gulp.dest('./dist/js/'))
});

gulp.task('sass', function() {
    gulp.src('scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 5 versions'],
            cascade: false
        }))
        .pipe(browserSync.stream())
        .pipe(gulp.dest('./dist/css/'))
});

/**
 * Important!!
 * Separate task for the reaction to `.jade` files
 */

gulp.task('jade-watch', ['templates'], reload);

gulp.task('templates', function() {
  
  var YOUR_LOCALS = {};

  gulp.src('./src/*.jade')
    .pipe(jade({
      locals: YOUR_LOCALS
    }))
    .pipe(browserSync.stream())
    .pipe(gulp.dest('./dist/'))

});

/**
 * Serve and watch the scss/jade files for changes
 */

gulp.task('default', ['sass', 'images', 'js', 'fonts', 'templates'], function () {

    browserSync({
      server: './dist',
      notify: false
    });

    gulp.watch('./images/**/*', ['images']);
    gulp.watch('./fonts/**/*', ['fonts']);
    gulp.watch('./scss/*.scss', ['sass']);
    gulp.watch('./js/*.js', ['js']);
    gulp.watch('./src/*.jade',  ['jade-watch']);
});


/**
 * Build
 */

gulp.task('build', ['sass', 'images', 'js', 'fonts', 'templates']);