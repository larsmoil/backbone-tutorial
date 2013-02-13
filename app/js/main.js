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

    },

    shim: {

    }
});

require(['app'],
function(App) {
    window.bTask = new App();
});
