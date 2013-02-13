/**
 * Created with JetBrains WebStorm.
 * User: lamoi
 * Date: 2/13/13
 * Time: 9:50 PM
 * To change this template use File | Settings | File Templates.
 */

define(['text!templates/auth.html'], function(template) {
    var AuthView = Backbone.View.extend({
        el: '#sign-in-container',
        template: _.template(template),

        events: {
            'click #authorize-button': 'auth'
        },

        initialize: function(app) {
            this.app = app;
        },

        render: function() {
            this.$el.html(this.template());
            return this;
        },

        auth: function() {
            this.app.apiManager.checkAuth();
            return false;
        }
    });

    return AuthView;
});
