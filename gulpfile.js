var gulp = require('gulp'),
  clean = require('gulp-clean'),
  imagemin = require('gulp-imagemin')

/*----------images 处理 start----------*/

//images文件夹删除
gulp.task('images-dir-remove', function () {
  return gulp.src(['www/assets/images'])
    .pipe(clean());
});

//images压缩（png,jpg,jpeg,gif）
gulp.task('images-min', ['images-dir-remove'], function () {
  return gulp.src(['www/assets/img/**/*.{png,jpg,jpeg,gif}'])
    .pipe(imagemin({
      optimizationLevel: 7, //类型：Number  默认：3  取值范围：0-7（优化等级）
      progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
      interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
      multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化
    }))
    .pipe(gulp.dest('www/assets/images'));
});

