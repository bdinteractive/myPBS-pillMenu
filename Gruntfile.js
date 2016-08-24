module.exports = function(grunt) {
 
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		// CONFIG ===================================/
		watch: {
			compass: {
				files: ['**/*.{scss,sass}'],
				tasks: ['compass:dev']
			},
			js: {
				files: ['js/**/*.js'],
				tasks: ['uglify']
			}
		},
		compass: {
			dev: {
				options: {
					sassDir: 'sass',
					cssDir: 'styles',
					environment: 'development'
				}
			},
			prod: {
				options: {
					sassDir: 'sass',
					cssDir: 'styles',
					environment: 'production'
				}
			}
		},
		uglify: {
			all: {
				files: {
					'js/min/main.min.js': [
						'node_modules/jquery/dist/jquery.js',
						'js/libs/bootstrap/tab.js',
						'js/libs/myPBS-pillMenu.js'
					]
				}
			}
		}
	});

	// DEPENDENT PLUGINS =========================/
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// TASKS =====================================/
	grunt.registerTask('default', ['compass:dev','uglify']);
	
};