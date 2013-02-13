/**
 * Created with JetBrains WebStorm.
 * User: lamoi
 * Date: 2/13/13
 * Time: 12:54 AM
 * To change this template use File | Settings | File Templates.
 */

define([
    'gapi'
  , 'views/app'
  , 'views/auth'
], function(ApiManager, AppView, AuthView) {
    var App = function() {
        this.views = {};
        this.views.app = new AppView();
        this.views.app.render();

        this.views.auth = new AuthView(this);
        this.views.auth.render();

        this.connectGapi();
    };

    App.prototype = {
        connectGapi: function() {
            this.apiManager = new ApiManager(this);
        }
    };

    return App;
});
