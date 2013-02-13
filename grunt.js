/**
 * Created with JetBrains WebStorm.
 * User: lamoi
 * Date: 2/13/13
 * Time: 6:33 PM
 * To change this template use File | Settings | File Templates.
 */

module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-exec');

    grunt.initConfig({
        exec: {
            build: {
                command: 'node node_modules/requirejs/bin/r.js -o require-config.js'
            }
        }
    });

    grunt.registerTask('copy-require', function() {
        grunt.file.mkdir('build/js/lib');
        grunt.file.copy('node_modules/requirejs/require.js', 'build/js/lib/require.js');
    });

    grunt.registerTask('default', 'exec copy-require');
};
