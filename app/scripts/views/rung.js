/*global jangleFit, Backbone, JST*/

jangleFit.Views = jangleFit.Views || {};

(function () {
    'use strict';

    jangleFit.Views.RungView = Backbone.View.extend({

        tagName: 'tr',

        className: 'rung',

        template: JST['app/scripts/templates/rung.ejs'],

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));

            return this;
        }

    });

})();
