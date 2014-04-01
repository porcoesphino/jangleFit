/*global jangleFit, Backbone*/

jangleFit.Views = jangleFit.Views || {};

(function () {
    'use strict';

    jangleFit.Views.UserCurrentView = Backbone.View.extend({

        template: jangleFit.Templates['app/scripts/templates/user-current.hbs'],

        render: function () {
            this.$el.html(this.template(this.model.attributes));
            return this;
        },

    });

})();
