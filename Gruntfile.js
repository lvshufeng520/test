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
      options: {
        removeComments:true,
        collapseWhitespace: true
      },
      files: [{
        expand: true,
        cwd: 'css',
        src: ['**/*.css', '!**/*.min.css'],
        dest: 'dist/css'
      }]
    },
    uglify:{
      options: {
        removeComments:true,
        collapseWhitespace: true
      },
      files: [{
        expand: true,
        cwd: 'js',
        src: ['**/*.js', '!**/*.min.js'],
        dest: 'dist/js'
      }]
      
    }
    
  });

  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('minify', ['htmlmin','cssmin','uglify']); 
};

