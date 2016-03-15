// gulp/paths.js
'use strict';

// base paths
var src    = './source/',
    dist   = './build/',
    dev    = 'dev/',
    prod   = 'prod/',
    assets = 'assets/';

// taks paths
module.exports = {
    to: {

    	// dest folders
        dist: {
            dev: dist + dev,
            prod: dist + prod,
            main: dist
        },
        dev: dev,
        prod: prod,

        // swig files
        swig: {
            config: src + 'templates/pages/',
            src: src + 'templates/pages/*.{html,swig}',
            watch: src + 'templates/**/*.+(json|swig)', // for watch task not render
            data: src + 'templates/pages/global'
        },

        // sass files
        sass: {
            src: [
                src + 'scss/*.{scss,sass}',
                src + 'scss/vendor/*.{scss,sass}',
                '!' + src + 'scss/vendor/lib/**/*.{scss,sass}'
            ],
            vendor: src + 'scss/vendor/lib/',
            dist: {
                dev: dist + dev + 'css',
                prod: dist + prod + 'css'
            }
        },

        // js files
        js: {
            src: {
                dir: src + 'js',
                main: src + 'js/main.js',
                copy: src + 'js/**/*.js'
            },
            vendor: src + 'js/vendor.js',
            dist: {
                dev: dist + dev + 'js',
                prod: dist + prod + 'js'
            }
        },

        // images
        images: {
            src: src + 'img/**/*',
            logo: src + 'img/logo.png', // change it depend on logo name
            dist: {
                favicons: dist + dev + 'img/favicons',
                dev: dist + dev + 'img',
                prod: dist + prod + 'img'
            }
        },

        // css fonts
        fonts: {
            src: src + 'scss/assets/fonts/{*,**/*}',
            vendor: src + 'scss/assets/fonts/vendor/',
            dist: {
                dev: dist + dev + 'css/assets/fonts',
                prod: dist + prod + 'css/assets/fonts'
            }
        },

        // css imgs
        cssImages: {
            src: src + 'scss/assets/img/**/*',
            vendor: src + 'scss/assets/img/vendor/',
            dist: {
                dev: dist + dev + 'css/assets/img',
                prod: dist + prod + 'css/assets/img'
            }
        }
        
    }
};