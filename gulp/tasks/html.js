'use strict';

module.exports = function() {
	$.gulp.task('html', function() {
	    return $.gulp.src($.config.src + 'template/pages/*.html', {since: $.gulp.lastRun('html')})
	        .pipe(
		        $.gp.if(
		           	$.config.production, $.gulp.dest($.config.path.prod)
		        )
		     )
		     .pipe($.gulp.dest($.config.path.dev));
	});
};