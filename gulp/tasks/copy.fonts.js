'use strict';

module.exports = function() {
    $.gulp.task('copy:fonts', function() {
        return $.gulp.src('./source/fonts/*.*', { since: $.gulp.lastRun('copy:fonts') })
            .pipe(
                $.gp.if(
                    $.config.production, $.gulp.dest($.config.path.prod + 'fonts')
                )
            )
            .pipe($.gulp.dest($.config.path.dev + 'fonts'));
    });
};