// Generated on with generetor-cornelio
'use strict';

module.exports = function (grunt) {

  // show elapsed time at the end
  require('time-grunt')(grunt);

  grunt.initConfig({
    // configurable yeoman
    yeoman: {
      app: 'src',
      build: 'build'
    },
    watch: {
      less: {
<<<<<<< HEAD
        files: ['<%= yeoman.app %>/css/{,*/}*.{less,css}'],
        tasks: ['less', 'autoprefixer']
      },
      styles: {
        files: ['<%= yeoman.app %>/css/{,*/}*.css'],
=======
        files: ['<% yeoman.app %>/css/{,*/}*.{less,css}'],
        tasks: ['less', 'autoprefixer']
      },
      styles: {
        files: ['<% yeoman.app %>/css/{,*/}*.css'],
>>>>>>> first commit
        tasks: ['copy:styles', 'autoprefixer']
      },
      livereload: {
        options: {
<<<<<<< HEAD
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= yeoman.app %>/**/*.html',
          '.tmp/css/{,*/}*.css',
          '{.tmp,<%= yeoman.app %>}/js/{,*/}*.js',
          '<%= yeoman.app %>/img/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
=======
          livereload: '<% connect.options.livereload %>'
        },
        files: [
          '<% yeoman.app %>/**/*.html',
          '.tmp/css/{,*/}*.css',
          '{.tmp,<% yeoman.app %>}/js/{,*/}*.js',
          '<% yeoman.app %>/img/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
>>>>>>> first commit
        ]
      }
    },
    connect: {
      options: {
        port: 8888,
        livereload: 35729,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      livereload: {
        options: {
          open: true,
          base: [
            '.tmp',
<<<<<<< HEAD
            '<%= yeoman.app %>'
=======
            '<% yeoman.app %>'
>>>>>>> first commit
          ]
        }
      },
      test: {
        options: {
          base: [
            '.tmp',
            'test',
<<<<<<< HEAD
            '<%= yeoman.app %>'
=======
            '<% yeoman.app %>'
>>>>>>> first commit
          ]
        }
      },
      build: {
        options: {
          open: true,
<<<<<<< HEAD
          base: '<%= yeoman.build %>'
=======
          base: '<% yeoman.build %>'
>>>>>>> first commit
        }
      }
    },
    clean: {
      build: {
        files: [{
          dot: true,
          src: [
            '.tmp',
<<<<<<< HEAD
            '<%= yeoman.build %>/*',
            '!<%= yeoman.build %>/.git*'
=======
            '<% yeoman.build %>/*',
            '!<% yeoman.build %>/.git*'
>>>>>>> first commit
          ]
        }]
      },
      server: '.tmp'
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
<<<<<<< HEAD
        '<%= yeoman.app %>/js/{,*/}*.js',
        '!<%= yeoman.app %>/js/vendor/*',
        '!<%= yeoman.app %>/components/*',
=======
        '<% yeoman.app %>/js/{,*/}*.js',
        '!<% yeoman.app %>/js/vendor/*',
        '!<% yeoman.app %>/components/*',
>>>>>>> first commit
        'test/spec/{,*/}*.js'
      ]
    },
    mocha_phantomjs: {
      all: {
        options: {
          run: true,
<<<<<<< HEAD
          urls: ['http://<%= connect.test.options.hostname %>:<%= connect.test.options.port %>/index.html']
=======
          urls: ['http://<% connect.test.options.hostname %>:<% connect.test.options.port %>/index.html']
>>>>>>> first commit
        }
      }
    },
    less: {
      compile: {
        files: [
          {
            src: 'src/css/main.less',
            dest: '.tmp/css/main.css'
          }
        ],
        yuicompress: true
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 1 version']
      },
      build: {
        files: [{
          expand: true,
          cwd: '.tmp/css/',
          src: '{,*/}*.css',
          dest: '.tmp/css/'
        }]
      }
    },
    // not used since Uglify task does concat,
    // but still available if needed
    /*concat: {
    build: {}
    },*/
    requirejs: {
      build: {
        // Options: https://github.com/jrburke/r.js/blob/master/build/example.build.js
        options: {
          // `name` and `out` is set by grunt-usemin
<<<<<<< HEAD
          baseUrl: '<%= yeoman.app %>/js',
=======
          baseUrl: '<% yeoman.app %>/js',
>>>>>>> first commit
          optimize: 'none',
          // TODO: Figure out how to make sourcemaps work with grunt-usemin
          // https://github.com/yeoman/grunt-usemin/issues/30
          //generateSourceMaps: true,
          // required to support SourceMaps
          // http://requirejs.org/docs/errors.html#sourcemapcomments
          preserveLicenseComments: false,
          useStrict: true,
          wrap: true
          //uglify2: {} // https://github.com/mishoo/UglifyJS2
        }
      }
    },
    rev: {
      build: {
        files: {
          src: [
<<<<<<< HEAD
            '<%= yeoman.build %>/js/{,*/}*.js',
            '<%= yeoman.build %>/css/{,*/}*.css',
            '<%= yeoman.build %>/img/{,*/}*.{png,jpg,jpeg,gif,webp}',
            '<%= yeoman.build %>/css/fonts/{,*/}*.*'
=======
            '<% yeoman.build %>/js/{,*/}*.js',
            '<% yeoman.build %>/css/{,*/}*.css',
            '<% yeoman.build %>/img/{,*/}*.{png,jpg,jpeg,gif,webp}',
            '<% yeoman.build %>/css/fonts/{,*/}*.*'
>>>>>>> first commit
          ]
        }
      }
    },
    useminPrepare: {
      options: {
<<<<<<< HEAD
        dest: '<%= yeoman.build %>'
      },
      html: '<%= yeoman.app %>/index.html'
    },
    usemin: {
      options: {
        dirs: ['<%= yeoman.build %>']
      },
      html: ['<%= yeoman.build %>/{,*/}*.html'],
      css: ['<%= yeoman.build %>/css/{,*/}*.css']
=======
        dest: '<% yeoman.build %>'
      },
      html: '<% yeoman.app %>/index.html'
    },
    usemin: {
      options: {
        dirs: ['<% yeoman.build %>']
      },
      html: ['<% yeoman.build %>/{,*/}*.html'],
      css: ['<% yeoman.build %>/css/{,*/}*.css']
>>>>>>> first commit
    },
    imagemin: {
      build: {
        files: [{
          expand: true,
<<<<<<< HEAD
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.{png,jpg,jpeg}',
          dest: '<%= yeoman.build %>/images'
=======
          cwd: '<% yeoman.app %>/images',
          src: '{,*/}*.{png,jpg,jpeg}',
          dest: '<% yeoman.build %>/images'
>>>>>>> first commit
        }]
      }
    },
    svgmin: {
      build: {
        files: [{
          expand: true,
<<<<<<< HEAD
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.svg',
          dest: '<%= yeoman.build %>/images'
=======
          cwd: '<% yeoman.app %>/images',
          src: '{,*/}*.svg',
          dest: '<% yeoman.build %>/images'
>>>>>>> first commit
        }]
      }
    },
    cssmin: {
      // This task is pre-configured if you do not wish to use Usemin
      // blocks for your CSS. By default, the Usemin block from your
      // `index.html` will take care of minification, e.g.
      //
      //     <!-- build:css({.tmp,app}) css/main.css -->
      //
      // build: {
      //     files: {
<<<<<<< HEAD
      //         '<%= yeoman.build %>/css/main.css': [
      //             '.tmp/css/{,*/}*.css',
      //             '<%= yeoman.app %>/css/{,*/}*.css'
=======
      //         '<% yeoman.build %>/css/main.css': [
      //             '.tmp/css/{,*/}*.css',
      //             '<% yeoman.app %>/css/{,*/}*.css'
>>>>>>> first commit
      //         ]
      //     }
      // }
    },
    htmlmin: {
      build: {
        options: {
            /*removeCommentsFromCDATA: true,
            // https://github.com/yeoman/grunt-usemin/issues/44
            //collapseWhitespace: true,
            collapseBooleanAttributes: true,
            removeAttributeQuotes: true,
            removeRedundantAttributes: true,
            useShortDoctype: true,
            removeEmptyAttributes: true,
            removeOptionalTags: true*/
        },
        files: [{
          expand: true,
<<<<<<< HEAD
          cwd: '<%= yeoman.app %>',
          src: '*.html',
          dest: '<%= yeoman.build %>'
=======
          cwd: '<% yeoman.app %>',
          src: '*.html',
          dest: '<% yeoman.build %>'
>>>>>>> first commit
        }]
      }
    },
    // Put files not handled in other tasks here
    copy: {
      build: {
        files: [{
          expand: true,
          dot: true,
<<<<<<< HEAD
          cwd: '<%= yeoman.app %>',
          dest: '<%= yeoman.build %>',
=======
          cwd: '<% yeoman.app %>',
          dest: '<% yeoman.build %>',
>>>>>>> first commit
          src: [
            '*.{ico,png,txt}',
            '.htaccess',
            'img/{,*/}*.{webp,gif}',
            'css/fonts/{,*/}*.*',
            'components/sass-bootstrap/fonts/*.*'
          ]
        }]
      },
      styles: {
        expand: true,
        dot: true,
<<<<<<< HEAD
        cwd: '<%= yeoman.app %>/css',
=======
        cwd: '<% yeoman.app %>/css',
>>>>>>> first commit
        dest: '.tmp/css/',
        src: '{,*/}*.css'
      }
    },
    modernizr: {
<<<<<<< HEAD
      devFile: '<%= yeoman.app %>/components/modernizr/modernizr.js',
      outputFile: '<%= yeoman.build %>/components/modernizr/modernizr.js',
      files: [
        '<%= yeoman.build %>/js/{,*/}*.js',
        '<%= yeoman.build %>/css/{,*/}*.css',
        '!<%= yeoman.build %>/js/vendor/*'
=======
      devFile: '<% yeoman.app %>/components/modernizr/modernizr.js',
      outputFile: '<% yeoman.build %>/components/modernizr/modernizr.js',
      files: [
        '<% yeoman.build %>/js/{,*/}*.js',
        '<% yeoman.build %>/css/{,*/}*.css',
        '!<% yeoman.build %>/js/vendor/*'
>>>>>>> first commit
      ],
      uglify: true
    },
    concurrent: {
      server: [
        'less',
        'copy:styles'
      ],
      test: [
        'copy:styles'
      ],
      build: [
        'less',
        'copy:styles',
        'imagemin',
        'svgmin',
        'htmlmin'
      ]
    },
    bower: {
      options: {
        exclude: ['modernizr']
      },
      all: {
<<<<<<< HEAD
        rjsConfig: '<%= yeoman.app %>/js/main.js'
=======
        rjsConfig: '<% yeoman.app %>/js/main.js'
>>>>>>> first commit
      }
    }
  });

  grunt.registerTask('server', function (target) {
    if (target === 'build') {
      return grunt.task.run(['build', 'connect:build:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'concurrent:server',
      'autoprefixer',
      'connect:livereload',
      'watch'
    ]);

  });

  grunt.registerTask('test', [
    'clean:server',
    'concurrent:test',
    'autoprefixer',
    'connect:test',
    'mocha_phantomjs'
  ]);

  grunt.registerTask('build', [
    'clean:build',
    'useminPrepare',
    'concurrent:build',
    'autoprefixer',
    'requirejs',
    'concat',
    'cssmin',
    'uglify',
    'modernizr',
    'copy:build',
    'rev',
    'usemin'
  ]);

  grunt.registerTask('default', [
    'jshint',
    'test',
    'build'
  ]);

  grunt.registerTask('devserver', [
    'server'
  ]);

  grunt.registerTask('buildserver', [
    'server:build'
  ]);

  // tasks
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-bower-requirejs');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-rev');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-usemin');
  grunt.loadNpmTasks('grunt-mocha');
  grunt.loadNpmTasks('grunt-mocha-phantomjs');
  grunt.loadNpmTasks('grunt-modernizr');
  grunt.loadNpmTasks('grunt-svgmin');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-contrib-less');

};
