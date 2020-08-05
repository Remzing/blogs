var gulp = require('gulp');
var minifycss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var htmlclean = require('gulp-htmlclean');
var imagemin = require('gulp-imagemin');
var babel = require('gulp-babel');
// 压缩html
gulp.task('minify-html', function () {
  return gulp.src('./public/**/*.html')
    .pipe(htmlclean())
    .pipe(htmlmin({
      removeComments: true,
      minifyJS: true,
      minifyCSS: true,
      minifyURLs: true,
    }))
    .pipe(gulp.dest('./public'))
});
// 压缩css
gulp.task('minify-css', function () {
  return gulp.src('./public/**/*.css')
    .pipe(minifycss({
      compatibility: 'ie8'
    }))
    .pipe(gulp.dest('./public'));
});
// 压缩js
gulp.task('minify-js', function () {
  return gulp.src('./public/js/**/*.js')
    .pipe(babel({
      presets: ['@babel/preset-env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('./public'));
});
// 压缩图片
gulp.task('minify-images', function () {
  return gulp.src('./public/images/**/*.*')
    .pipe(imagemin({
      optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
      progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
      interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
      multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化
    }))
    .pipe(gulp.dest('./public/images'))
});
// 默认任务
gulp.task('default', gulp.series([
  'minify-html', 'minify-css', 'minify-js', 'minify-images'
]));