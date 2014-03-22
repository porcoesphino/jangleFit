/*global jangleFit, Backbone, JST*/

jangleFit.Views = jangleFit.Views || {};

(function () {
    'use strict';

    jangleFit.Views.LadderView = Backbone.View.extend({

        el: '#jangleFit-app',

        template: JST['app/scripts/templates/ladder.ejs'],

        initialize: function () {
            this.render();

            this.listenTo(this.collection, 'add', this.addRung);
            this.listenTo(this.collection, 'reset', this.addAllRungs);

            this.collection.fetch();
        },

        render: function () {
            this.$el.html(this.template());

            return this;
        },

        addRung: function (rung) {
            var view = new jangleFit.Views.RungView({ model: rung});
            this.$('tbody').append(view.render().el);
        },

        addRungs: function () {
            this.collection.each(this.addRung, this);
        }
    });

})();
