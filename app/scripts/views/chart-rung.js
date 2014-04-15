/*global jangleFit, Backbone*/

jangleFit.Views = jangleFit.Views || {};

(function () {
    'use strict';
Make this a generic version of the ladder
// Ladder may as well use this
    jangleFit.Views.ChartRungView = Backbone.View.extend({

        template: jangleFit.Templates['app/scripts/templates/progress.hbs'],

        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.html(this.template());
            this.addProgress();
            return this;
        },

        addProgress: function () {
            var view = new jangleFit.Views.RungView(
                { model: this.model }
            );
            this.$el.find('tbody').append(view.render().el);
        },

    });

})();
