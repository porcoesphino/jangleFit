/*global jangleFit, Backbone*/

jangleFit.Views = jangleFit.Views || {};

(function () {
    'use strict';

    jangleFit.Views.RungView = Backbone.View.extend({

        tagName: 'tr',

        className: 'rung',

        template: jangleFit.Templates['app/scripts/templates/rung.hbs'],

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));

            return this;
        }

    });

})();
