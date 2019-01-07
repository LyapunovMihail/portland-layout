'use strict';

module.exports = function() {
  $.gulp.task('serve', function() {
    $.browserSync.init($.config.browserSync);

    $.browserSync.watch([
      $.config.src + '**/*.*', 
      $.config.src + '!**/*.scss',
      $.config.src + '!**/*.css'
    ], $.browserSync.reload);
  });
};
