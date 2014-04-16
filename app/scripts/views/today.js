/*global jangleFit, Backbone*/

jangleFit.Views = jangleFit.Views || {};

(function () {
    'use strict';

    jangleFit.Views.TodayView = Backbone.View.extend({

        template: jangleFit.Templates['app/scripts/templates/today.hbs'],

        initialize: function() {
            this.render();
        },

        events: {
            'click button#start-btn': 'startHandler'
        },

        startHandler: function() {
            jangleFit.router.navigate('#/training/' + this.model.get('title'));
        },

        render: function () {
            var rows = [];
            var current = this.model.getCurrentRung();
            if (current) {
                current = current.toJSON();
                current.label = 'Current';
                rows.push(current);
            }
            var json = this.model.toJSON();
            json.rows = rows;
            this.$el.html(this.template(json));
            return this;
        },

    });

})();
