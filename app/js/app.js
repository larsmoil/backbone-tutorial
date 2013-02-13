/**
 * Created with JetBrains WebStorm.
 * User: lamoi
 * Date: 2/13/13
 * Time: 12:54 AM
 * To change this template use File | Settings | File Templates.
 */

define([
    'gapi'
], function(ApiManager) {
    var App = function() {
        this.connectGapi();
    };

    App.prototype = {
        connectGapi: function() {
            this.apiManager = new ApiManager();
        }
    };

    return App;
});
