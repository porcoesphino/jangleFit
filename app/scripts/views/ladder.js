/*global jangleFit, Backbone*/

jangleFit.Views = jangleFit.Views || {};

(function () {
    'use strict';

    jangleFit.Views.LadderView = Backbone.View.extend({

        template: jangleFit.Templates['app/scripts/templates/ladder.hbs'],

        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.html(this.template());
            this.addRungs();
            return this;
        },

        addRung: function (rung) {
            var view = new jangleFit.Views.RungView({ model: rung});
            this.$el.find('tbody').append(view.render().el);
        },

        addRungs: function () {
            this.model.collection.each(this.addRung, this);
        }
    });

})();
