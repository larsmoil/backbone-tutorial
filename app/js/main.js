/**
 * Created with JetBrains WebStorm.
 * User: lamoi
 * Date: 2/13/13
 * Time: 12:52 AM
 * To change this template use File | Settings | File Templates.
 */
requirejs.config({
    baseUrl: 'js',

    paths: {
        text: 'lib/text'
    },

    shim: {
        'lib/underscore-min': {
            exports: '_'
        },
        'lib/backbone-min': {
            deps: ['lib/underscore-min'],
            exports: 'Backbone'
        },
        'app': {
            deps: ['lib/underscore-min', 'lib/backbone-min']
        }
    }
});

require(['app'],
function(App) {
    window.bTask = new App();
});
