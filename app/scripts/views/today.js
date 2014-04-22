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
            var addIfExists = function(title, row) {
                if (row) {
                    var result = row.toJSON();
                    result.label = title;
                    rows.push(result);
                }
            };
            var ladder = this.model.getLadder();
            var currentRung = this.model.getRung();
            if (ladder) {
                addIfExists('Highest', ladder.getRungHighest());
                addIfExists('Next', ladder.getRungOffset(currentRung, -1));
            }
            addIfExists('Current', currentRung);

            var json = this.model.toJSON();
            json.rows = rows;
            this.$el.html(this.template(json));
            return this;
        },

    });

})();
