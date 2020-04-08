module.exports = function (grunt) {
  grunt.initConfig({
    htmlmin: {
      options: {
	removeComments:true,
        collapseWhitespace: true
      },
      files: {
        src: './index.html',
        dest: 'dist/index.html'
      }
    },
    cssmin:{
      'dist/bundle.min.css': 'dist/bundle.css'
    },
    uglify:{
      'dist/bundle.min.js': 'dist/bundle.js'
      }
    
  });

  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('minify', ['htmlmin','cssmin','uglify']); 
};
