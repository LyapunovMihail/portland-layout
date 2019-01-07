'use strict';

module.exports = function () {
  $.gulp.task('pug', function () {
    return $.gulp.src($.config.src + 'template/pages/*.pug')
      .pipe($.gp.pug({
        pretty: true
      }))
      .on('error', $.gp.notify.onError(function (error) {
        return {
          title: 'Pug',
          message: error.message
        }
      }))

      .pipe($.gp.minifier({
        minify: $.config.minify,
        collapseWhitespace: true,
        conservativeCollapse: true,
        minifyJS: true,
        minifyCSS: true,
        minifyHTML: true,
        getKeptComment: function (content, filePath) {
          var m = content.match(/\/\*![\s\S]*?\*\//img);
          return m && m.join('\n') + '\n' || '';
        }
      }))
      .pipe(
        $.gp.if(
          $.config.production, $.gulp.dest($.config.path.prod)
        )
      )
      .pipe($.gulp.dest($.config.path.dev));
  });
};