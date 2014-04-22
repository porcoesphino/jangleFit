/*global _, jangleFit, Backbone*/

jangleFit.Models = jangleFit.Models || {};

(function () {
    'use strict';

    jangleFit.Models.Plan = Backbone.Model.extend({

        initialize: function() {
            var ladders = new jangleFit.Collections.LadderCollection(),
                planId = this.get('title'),
                exercisesPlan = this.get('exercises'),
                rungLabelPlan = this.get('rungLabel');
            this.id = planId;
            this.localStorage = new Backbone.LocalStorage(jangleFit.storePrefix + '-ladder');
            this.collection = ladders;
            _.each(this.get('ladders'), function(ladder, id) {
                var exercises = ladder.exercises,
                    rungLabel = ladder.rungLabel;
                if (!exercises) {
                    exercises = exercisesPlan;
                }
                if (!rungLabel) {
                    rungLabel = rungLabelPlan;
                }
                ladders.add(new jangleFit.Models.Ladder(
                    {
                        id: id,
                        planId: planId,
                        rungLabel: rungLabel,
                        exercises: exercises,
                        ladder: ladder.ladder
                    }
                ));
            });
        },

        getLadder: function(ladderId) {
            return this.collection.get(ladderId);
        }

    });

})();
