// gulp/tasks/default/nunjucks.js
'use strict';

// ----------------------------------
// available tasks: 
//    'gulp swig'           : main task
//    'gulp swig:render'    : render nunjucks files
//    'gulp swig:inject'    : inject css/js files
// ----------------------------------
// plugins:
//     gulp-swig           : $.swig
//     browser-sync        : $.browserSync
//     gulp-changed        : $.changed
//     gulp-newer          : $.newer
//     gulp-inject         : $.inject
//     gulp-plumber        : $.plumber
//     gulp-prettify       : $.prettify
// ----------------------------------
// config:
//     config.task.nunjucks : task name
// ----------------------------------

module.exports = function(gulp, $, path, config) {

    // render nunjucks files task
    gulp.task(config.task.swig + ':render', 'render swig files', function() {

        return gulp.src(path.to.swig.src)
            // prevent breaking errors
            .pipe($.plumber({
                errorHandler: config.error
            }))
            // only pass through changed files
            .pipe($.changed(path.to.dist.dev + '*.html'))
            // only pass through newer source files
            .pipe($.newer(path.to.dist.dev + '*.html'))
            // start render
            .pipe($.swig(
                config.template.swigOptions
            ))
            // beautify HTML
            .pipe($.prettify(
                config.html.prettifyOptions // options
            ))
            .pipe(gulp.dest(path.to.dist.dev))
            .pipe($.browserSync.reload({
                stream: true
            }));

    });

    // inject css/js files task
    gulp.task(config.task.swig + ':inject', 'inject css/js files', function() {

        return gulp.src(path.to.dist.dev + '*.html')
            // prevent breaking errors
            .pipe($.plumber({
                errorHandler: config.error
            }))
            /**
             * CSS files
             */
            // inject vendor files
            .pipe($.inject(gulp.src(
                path.to.sass.dist.dev + '/vendor/**/*.css', {
                    read: false
                }), 
                config.template.injectCss.vendorOptions // options
            ))
            // inject main files
            .pipe($.inject(gulp.src(
                path.to.sass.dist.dev + '/*.css', {
                    read: false
                }), 
                config.template.injectCss.mainOptions // options
            ))
            /**
             * JS files
             */
            // inject main files
            .pipe($.inject(gulp.src(
                path.to.js.dist.dev + '/*.js', {
                    read: false
                }), 
                config.template.injectJs.options // options
            ))
            .pipe(gulp.dest(path.to.dist.dev))
            .pipe($.browserSync.reload({
                stream: true
            }));

    });

    // main nunjucks task
    gulp.task(config.task.swig, 'main swig task', function(cb) {

        $.runSequence(
            config.task.swig + ':render',
            config.task.swig + ':inject',
            cb
        );

    });

};