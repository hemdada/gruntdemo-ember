module.exports = function (grunt) {
    "use strict";
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                // define a string to put between each file in the concatenated output
                separator: ';',
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            dist: {
                // the files to concatenate
                src: ['js/app.js',
                    'js/model/*.js',
                    'js/view/*.js',
                    'js/route/*.js'
                ],
                // the location of the resulting JS file
                dest: 'dist/<%= pkg.name %>.js'
            }
        },
        uglify: {
            options: {
                mangle: true
            },
            distc: {
                files: { 'dist/<%= pkg.name %>-compress.js': ['dist/<%= pkg.name %>.js']}
            }
        },
        jshint: {
            options: {
                "eqeqeq": true,
                "curly": true,
                "asi": false
            },
            app: ['js/app.js',
                'js/model/*.js',
                'js/view/*.js',
                'js/route/*.js'
            ]
        },
        watch: {
            files: ['js/app.js',
                'js/model/*.js',
                'js/view/*.js',
                'js/route/*.js'
            ],
            tasks: ['concat']
        },
        sass: {
            options: {
                style: 'compressed'    //compressed, expanded, nested , compact
            },
            dist: {
                files: {
                    'css/navigation.css': ['css/navigation.scss']
                }
            }
        },
        jasmine: {
            tests: {
                src: ['js/libs/jquery-1.9.1.js',
                    'js/libs/handlebars-1.0.0-rc.3.js',
                    'js/libs/ember-1.0.0-rc.3.js',
                    'js/libs/ember-data.js',
                    'js/app.js',
                    'js/model/*.js',
                    'js/view/*.js',
                    'js/route/*.js'],
                options: {
                    specs: 'spec/Spec.js'
                }
            }
        },
        yuidoc: {
            compile: {
                name: '<%= pkg.name %>',
                description: '<%= pkg.description %>',
                options: {
                    paths: ['js/model',
                        'js/view',
                        'js/route'],
                    outdir: 'docs'
                }
            }
        },
        multi: {
            foo: [1, 2, 3, 4],
            bar: "hello grunt",
            baz: false
        }
    });


    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-yuidoc');

    //register default task
    grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'watch']);
    //grunt.registerTask('dev', ['jshint', 'concat:dev', 'uglify', 'watch']);


    //register custom function task
    grunt.registerTask('foo', "function task", function (arg1, arg2) {
        if (arguments.length === 0) {
            grunt.log.writeln(this.name + " no arguments");
        } else {
            grunt.log.writeln(this.name + " " + arg1 + " " + arg2);
        }
    });

    //register multitask
    grunt.registerMultiTask('multi', "multi task", function () {
        grunt.log.write(this.target + " " + this.data);
    });
};