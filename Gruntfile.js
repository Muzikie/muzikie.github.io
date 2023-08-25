module.exports = function (grunt) {
   const sass = require("node-sass");

   // Project configuration.
   grunt.initConfig({
      pkg: grunt.file.readJSON("package.json"),
      clean: {
         build: ['docs/']
      },
      copy: {
         main: {
             expand: true,
             cwd: 'src/assets/',
             src: '**',
             dest: 'docs/assets/'
         }
     },
     assemble: {
         options: {
            layoutdir: 'templates',
            partials: ['src/templates/*.handlebars'],
            flatten: true
         },
         pages: {
            src: ['src/pages/*.handlebars'],
            dest: 'docs/'
         }
      },
      uglify: {
         options: {
            beautify: true,
            compress: false,
            banner:
               '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
         },
         build: {
            files: {
               'docs/js/vendors.min.js': ['./node_modules/jquery/dist/jquery.min.js'],
               'docs/js/bundle.min.js': ['./src/js/menu.js', './src/js/accordion.js', './src/js/mailChimp.js', './src/js/scroll.js']
             }
         }
      },

      sass: {
         options: {
            implementation: sass,
            sourceMap: true
         },
         dist: {
            files: {
               "docs/css/style.css": "./src/scss/style.scss"
            }
         }
      }
   });

   // Load the plugin that provides the "uglify" task.
   grunt.loadNpmTasks("grunt-sass");
   grunt.loadNpmTasks('grunt-contrib-clean');
   grunt.loadNpmTasks('grunt-contrib-copy');
   grunt.loadNpmTasks('grunt-assemble');
   grunt.loadNpmTasks("grunt-contrib-uglify");
   grunt.loadNpmTasks("grunt-contrib-cssmin");

   // Default task(s).
   grunt.registerTask("default", ['clean', 'assemble', 'copy', 'uglify', 'sass']);
};
