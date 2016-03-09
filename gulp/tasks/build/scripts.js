// gulp/tasks/build/scripts.js
'use strict';

// ----------------------------------
// available tasks: 
//    'gulp build:js' : main js task
// ----------------------------------
// plugins:
//     gulp-sourcemaps    : $.sourcemaps
//     gulp-uglify        : $.uglify
// ----------------------------------  
// config:
//     config.task.build : task name
// ----------------------------------

module.exports = function(gulp, $, path, config) {

    // copy js files task
    gulp.task(config.task.build + ':js', 'copy js files to prod folder', function() {

        return gulp.src(path.to.js.dist.dev + '/*.{js,map}')
        		.pipe($.sourcemaps.init({
                loadMaps: true
            }))
            .pipe($.uglify())
            .on('error', config.error)
            .pipe($.sourcemaps.write('.'))
            .pipe(gulp.dest(path.to.js.dist.prod));

    });

};