'use strict';

module.exports = function() {
    $.gulp.task('sass', function() {
        return $.gulp.src([
            $.config.src + 'styles/**/*.scss'
        ])
            .pipe(
                $.gp.if(
                    !$.config.production, $.gp.sourcemaps.init()
                )
            )
            .pipe($.gp.sass())
            .on('error', $.gp.notify.onError({ title: 'Style' }))
            .pipe($.gp.autoprefixer({ browsers: $.config.autoprefixerConfig }))
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
                    !$.config.production, $.gp.sourcemaps.write()
                )
            )
            .pipe(
                $.gp.if(
                    $.config.production, $.gulp.dest($.config.path.prod + 'css')
                )
            )
            .pipe($.gulp.dest($.config.path.dev + 'css'))
            .pipe($.browserSync.stream());
    })
};
