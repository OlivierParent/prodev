var gulp = require('gulp'),
    sh = require('shelljs');

gulp.task('default', [
    'vendor']);

gulp.task('vendor', vendor);
function vendor() {
    sh.rm('-rf', './vendor');

    // FontAwesome
    // -----------
    gulp // CSS
        .src('./bower_components/font-awesome/fonts/*')
        .pipe(gulp.dest('./vendor/font-awesome/fonts/'));
    gulp // JS
        .src('./bower_components/font-awesome/css/*.*.*')
        .pipe(gulp.dest('./vendor/font-awesome/css/'));

    // Reveal.js
    // ---------
    gulp // CSS
        .src('./bower_components/reveal.js/css/**/*.css')
        .pipe(gulp.dest('./vendor/reveal.js/css/'));
    gulp // JS
        .src('./bower_components/reveal.js/js/*.js')
        .pipe(gulp.dest('./vendor/reveal.js/js/'));
    gulp // Lib
        .src('./bower_components/reveal.js/lib/**/*')
        .pipe(gulp.dest('./vendor/reveal.js/lib/'));
    gulp // Plugin
        .src('./bower_components/reveal.js/plugin/**/*.js')
        .pipe(gulp.dest('./vendor/reveal.js/plugin/'));

    return gulp;
}