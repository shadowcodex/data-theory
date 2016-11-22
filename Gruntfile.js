module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    jshint: {
        all: ['Gruntfile.js', 'index.js', 'index-collab.js', 'test/*.js', 'modules/**/*.js', 'modules/*.js']
    },
    mrdoc: {
        all: {
            src: 'modules',
            target: 'docs',
            options: {
                // ignore: 'sorts/distribution.js',
                readme: 'readme.md'
            }
        }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-mrdoc');

  // Default task(s).
  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('doc', ['mrdoc']);

};