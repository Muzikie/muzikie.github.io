module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: [
          './node_modules/jquery/dist/jquery.min.js',
          './node_modules/bootstrap/dist/js/bootstrap.min.js',
          './node_modules/owl.carousel/dist/owl.carousel.min.js',
          './src/js/app.js'
        ],
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    cssmin: {
			css: {
				src: [
          './node_modules/bootstrap/dist/css/bootstrap.min.css',
          './node_modules/owl.carousel/dist/assets/owl.carousel.min.css',
          './src/css/themify-icons.css',
          './src/css/style.css',
        ],
				dest: 'build/<%= pkg.name %>.min.css'
			}
		}
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'cssmin']);

};
