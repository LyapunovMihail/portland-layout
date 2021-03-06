'use strict';

module.exports = function() {
  $.gulp.task('js:process.vendor', function() {
    return $.gulp.src($.path.js.vendor)
        .pipe(
            $.gp.if(
                !$.config.production, $.gp.sourcemaps.init()
            )
        )
        .pipe($.gp.concat('vendor.js'))
        .pipe(
            $.gp.if(
                !$.config.production, $.gp.sourcemaps.write('.')
            )
        )
        .pipe( $.gp.minifier({

            minify: $.config.minify,
            collapseWhitespace: true,
            conservativeCollapse: true,
            minifyJS: true,
            minifyCSS: true,
            getKeptComment: function (content, filePath) {
                var m = content.match(/\/\*![\s\S]*?\*\//img);
                return m && m.join('\n') + '\n' || '';
            }

        }))
        .pipe(
            $.gp.if(
                $.config.production, $.gulp.dest($.config.path.prod + 'js/')
            )
        )
        .pipe($.gulp.dest($.config.path.dev + 'js/'))
  })
};
