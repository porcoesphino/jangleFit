/*global jangleFit, Backbone*/

jangleFit.Views = jangleFit.Views || {};

(function () {
    'use strict';

    jangleFit.Views.LogView = Backbone.View.extend({

        template: jangleFit.Templates['app/scripts/templates/log.hbs'],

        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.html(this.template());
            return this;
        },

    });

})();
