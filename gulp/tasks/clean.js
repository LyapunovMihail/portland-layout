'use strict';

module.exports = function() {
  $.gulp.task('clean', function(cb) {
    if ($.config.production) {
      return $.del([
        $.config.path.prod + '*',
        '!dist/.git'
      ], {force: true});
    } else {
      return $.del([
        $.config.path.dev + '*',
        '!dist/.git'
      ], {force: true});
    }
  });
};
