/*
    Gulpfile Delta
    D.Rybkin
    Примечание:
        NodeJS -v: 8.11.2
            -Быстрый способ сменить версию: 'sudo npm i -g n; sudo n 8.11.2'
        Если при запуске задач выкидывает ошибку 'Error: watch src/scripts/libs ENOSPC'
            -не пугайтесь, это баг NodeJS
        Фикс: 'echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p'
        Для запуска production: 'gulp --production'
*/

'use strict';

global.$ = {
    package: require('./package.json'),
    config: require('./gulp/config'),
    path: {
        task: require('./gulp/paths/tasks.js'),
        js: require('./gulp/paths/app.js')
    },
    gulp: require('gulp'),
    del: require('del'),
    browserSync: require('browser-sync').create(),
    gp: require('gulp-load-plugins')()
};

$.path.task.forEach(function(taskPath) {
    require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
    'clean',
    $.gulp.parallel(
        'sass',
        'css',
        'pug',
        'html',
        'js:process.app',
        'js:process.vendor',
        'copy:image',
        'copy:js',
        'copy:fonts'
    ),
    $.gulp.parallel(
        'watch',
        'serve'
    )
));
