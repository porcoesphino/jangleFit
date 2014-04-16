/*global jangleFit, Backbone*/

jangleFit.Collections = jangleFit.Collections || {};

(function () {
    'use strict';

    jangleFit.Collections.PlanCollection = Backbone.Collection.extend({

        getCurrentRung: function(planMeta) {
            var level = planMeta.getLevel();
            return this.getLadder().get(level);
        },

        getLadder: function() {
            if (!this.cached) {
                this.cached = new jangleFit.Collections.RungCollection();
                this.cached.fetch();
            }
            return this.cached;
        },

    });

})();
