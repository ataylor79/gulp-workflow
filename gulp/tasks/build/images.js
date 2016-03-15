// gulp/tasks/build/images.js
'use strict';

// ----------------------------------
// available tasks: 
//    'gulp build:images' 			: main images task
//    'gulp build:images:root'  : main root images task
//    'gulp build:images:css' 	: main css images task    
// ----------------------------------
// config:
//     config.task.build : task name
// ----------------------------------

module.exports = function(gulp, $, path, config) {

    // copy images to prod folder
    gulp.task(config.task.build + ':images:root', 'copy images to prod folder', function() {

        return gulp.src(path.to.images.dist.dev + '/**/*')
            .pipe(gulp.dest(path.to.images.dist.prod));

    });

    // copy css images to prod folder
    gulp.task(config.task.build + ':images:css', 'copy css images to prod folder', function() {

        return gulp.src(path.to.cssImages.dist.dev + '/**/*')
            .pipe(gulp.dest(path.to.cssImages.dist.prod));

    });

     // main images task
    gulp.task(config.task.build + ':images', 'main build:images task', function(cb) {

        $.runSequence(
            config.task.build + ':images:root',
            config.task.build + ':images:css',
            cb
        )

    });

};