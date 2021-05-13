const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const browsersync = require('browser-sync');
const del = require('del');

const browserSync = browsersync.create();

function browserSyncRun() {
  browserSync.init({
    server: {
      baseDir: './build/'
    },
    port: 3002
  });
}

function browserSyncReload() {
  browserSync.reload();
}

function clean() {
  return del(['build/*.html']);
}

function js() {
  gulp.src('src/js/*.js')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(concat('build.js'))
    .pipe(gulp.dest('build/js'))
    .pipe(browserSync.stream());
}

function html() {
  gulp.src('src/*.html')
    .pipe(gulp.dest('build'))
    .pipe(browserSync.stream());
}

function watchFiles() {
  gulp.watch('src/**/*.html', gulp.series(clean, gulp.parallel(html, browserSyncReload)));
  gulp.watch('src/**/*.js', js);
}

const watch = gulp.series(clean, gulp.parallel(browserSyncRun, watchFiles, js, html));

exports.watch = watch;
