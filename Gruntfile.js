module.exports = function (grunt) {
   const sass = require("node-sass");

   // Project configuration.
   grunt.initConfig({
      pkg: grunt.file.readJSON("package.json"),
      uglify: {
         options: {
            banner:
               '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
         },
         build: {
            src: [
               "./node_modules/jquery/dist/jquery.min.js",
               "./src/js/index.js",
               "./src/js/jquery.js"
            ],
            dest: "build/<%= pkg.name %>.min.js"
         }
      },

      sass: {
         options: {
            implementation: sass,
            sourceMap: true
         },
         dist: {
            files: {
               "build/style.css": "./src/scss/style.scss"
            }
         }
      }
   });

   // Load the plugin that provides the "uglify" task.
   grunt.loadNpmTasks("grunt-sass");

   grunt.loadNpmTasks("grunt-contrib-uglify");
   grunt.loadNpmTasks("grunt-contrib-cssmin");

   // Default task(s).
   grunt.registerTask("default", ["uglify", "sass"]);
};
