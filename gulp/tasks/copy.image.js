'use strict';

module.exports = function () {
  $.gulp.task('copy:image', function () {
    return $.gulp.src([
        $.config.src + 'images/**/*'
      ], {
        since: $.gulp.lastRun('copy:image')
      })
      .pipe(
        $.gp.if(
          $.config.production, $.gp.imagemin({
            interlaced: true,
            progressive: true,
            optimizationLevel: 3
          })
        )
      )
      .pipe(
        $.gp.if(
          $.config.production, $.gulp.dest($.config.path.prod + 'img')
        )
      )
      .pipe($.gulp.dest($.config.path.dev + 'img'));
  });
};