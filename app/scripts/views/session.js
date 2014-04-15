/*global jangleFit, Backbone*/

jangleFit.Views = jangleFit.Views || {};

(function () {
    'use strict';

    jangleFit.Views.SessionView = Backbone.View.extend({

        template: jangleFit.Templates['app/scripts/templates/session.hbs'],

        initialize: function () {
            this.render();
            this.listenTo(this.model, 'change', this.render);
            this.listenTo(this.model.collection, 'add', this.addSet);
        },

        addSet: function(set) {
            if (!this.$sets) {
                this.$sets = this.$el.find('#sets');
            }
            this.$sets.append(new jangleFit.Views.SetView({model: set}).$el);
        },

        render: function () {
            this.$el.html(this.template({
                timestamp: new Date(this.model.get('timestamp')).toString()
            }));
            return this;
        },

    });

})();
