let argv = require('yargs').argv;

module.exports = {
    browserSync: {
        notify: false,
        server: {
            baseDir: ['.tmp', './build'],
            logPrefix: 'MS',
            routes: {
                '/bower_components': 'bower_components'
            }
        },
        open: false,
        port: 3000
    },

    production: argv.production,
    src: './source/',
    path: {
        dev: './build/',
        prod: './production/'
    },
    minify: argv.production,
    
    autoprefixerConfig: [
        'ie >= 10',
        'ie_mob >= 10',
        'ff >= 30',
        'chrome >= 34',
        'safari >= 7',
        'opera >= 23',
        'ios >= 7',
        'android >= 4.4',
        'bb >= 10'
    ]
};