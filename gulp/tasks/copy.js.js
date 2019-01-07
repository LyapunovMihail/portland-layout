'use strict';

module.exports = function() {
    $.gulp.task('copy:js', function() {
        return $.gulp.src('./source/js/libraries/**/*.*', { since: $.gulp.lastRun('copy:js') })
            .pipe(
                $.gp.if(
                    $.config.production, $.gulp.dest($.config.path.prod + 'js/libraries')
                )
            )
            .pipe($.gulp.dest($.config.path.dev + 'js/libraries'));
    });
};

