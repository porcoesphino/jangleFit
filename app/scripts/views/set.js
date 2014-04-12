/*global jangleFit, Backbone*/

jangleFit.Views = jangleFit.Views || {};

(function () {
    'use strict';

    jangleFit.Views.SetView = Backbone.View.extend({

        tagName: 'tr',

        template: jangleFit.Templates['app/scripts/templates/set.hbs'],

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            var json = this.model.toJSON();
            json.timestamp = new Date(json.timestamp).toLocaleTimeString();
            this.$el.html(this.template(json));
            return this;
        }

    });

})();
