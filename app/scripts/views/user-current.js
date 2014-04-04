/*global jangleFit, Backbone*/

jangleFit.Views = jangleFit.Views || {};

(function () {
    'use strict';

    jangleFit.Views.UserCurrentView = Backbone.View.extend({

        template: jangleFit.Templates['app/scripts/templates/user-current.hbs'],
        initialize: function() {
            this.render();
        },

        render: function () {
            this.$el.html(this.template(this.model.attributes));
            return this;
        },

    });

})();
