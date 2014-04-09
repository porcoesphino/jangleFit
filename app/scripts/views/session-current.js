/*global jangleFit, Backbone*/

jangleFit.Views = jangleFit.Views || {};

(function () {
    'use strict';

    jangleFit.Views.SessionCurrentView = Backbone.View.extend({

        template: jangleFit.Templates['app/scripts/templates/session-current.hbs'],

        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.html(this.template({
                timestamp: new Date(this.model.get('timestamp')).toString()
            }));
            return this;
        },

    });

})();
