module.exports = function(grunt) {
    "use strict";

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        bt: {
            dist: 'dist',
            uglify: {
                files: {
                    'dist/element-kit-min.js': ['dist/element-kit.js']
                }
            },
            browserify: {
                files: {
                    'dist/element-kit.js': ['src/**/*.js']
                },
                options: {
                    browserifyOptions: {
                        standalone: 'ElementKit'
                    }

                }
            },
            tests: {
                qunit: {
                    src: ['tests/*.js']
                }
            }
        }
    });

    require("load-grunt-tasks")(grunt);
};