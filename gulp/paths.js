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
        dist: {
            dev: dist + dev,
            prod: dist + prod,
            main: dist
        },
        dev: dev,
        prod: prod,
        nunjucks: {
            config: src + 'templates/',
            src: src + 'templates/*.{html,nunjucks}',
            watch: src + 'templates/**/*.+(html|nunjucks)' // for watch task not render
        },
        sass: {
            src: [
                src + 'scss/**/*.{scss,sass}',
                '!' + src + 'scss/vendor/lib/**/*.{scss,sass}',
                '!' + src + 'scss/vendor/bootstrap.scss'
            ],
            vendor: src + 'scss/vendor/lib/',
            foundation: src + 'scss/vendor/lib/foundation-sites/scss',
            bootstrap: src + 'scss/vendor/lib/bootstrap/scss',
            dist: {
                dev: dist + dev + assets + 'css',
                prod: dist + prod + assets + 'css'
            }
        },
        js: {
        	src: {
	        	main: src + 'js/main.js',
	        	copy: src + 'js/**/*.js'
        	},
            vendor: src + 'js/vendor/',
            dist: {
                dev: dist + dev + assets + 'js',
                prod: dist + prod + assets + 'js'
            }
        }
    }
};