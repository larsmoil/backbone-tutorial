/**
 * Created with JetBrains WebStorm.
 * User: lamoi
 * Date: 2/13/13
 * Time: 9:45 PM
 * To change this template use File | Settings | File Templates.
 */

define([
    'text!templates/app.html'
],

function(template) {
    var AppView = Backbone.View.extend({
        id: 'main',
        tagName: 'div',
        className: 'container-fluid',
        el: 'body',
        template: _.template(template),

        events: {

        },

        initialize: function() {

        },

        render: function() {
            this.$el.html(this.template());
            return this;
        }
    });

    return AppView;
});
