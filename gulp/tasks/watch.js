'use strict';

module.exports = function() {
  $.gulp.task('watch', function() {
    $.gulp.watch('./source/js/**/app.js', $.gulp.series('js:process.app'));
    $.gulp.watch([
      './source/js/**/*.js', 
      '!./source/js/**/app.js'], 
      $.gulp.series('js:process.vendor'
    ));
    $.gulp.watch('./source/styles/**/*.scss', $.gulp.series('sass'));
    $.gulp.watch('./source/template/**/*.pug', $.gulp.series('pug'));
    $.gulp.watch('./source/template/**/*.html', $.gulp.series('html'));
    $.gulp.watch('./source/images/**/*.*', $.gulp.series('copy:image'));

    $.gulp.watch('./source/js/libraries/**/*.*', $.gulp.series('copy:js'));
    $.gulp.watch('./source/style/**/**/*.css', $.gulp.series('css'));
  });
};
