/*global _, jangleFit, Backbone*/

jangleFit.Models = jangleFit.Models || {};

(function () {
    'use strict';

    jangleFit.Models.Plan = Backbone.Model.extend({

        initialize: function() {
            this.id = this.get('title');
            this.localStorage = new Backbone.LocalStorage(jangleFit.storePrefix + '-ladder');
            var ladders = new jangleFit.Collections.LadderCollection();
            var laddersKey = 'ladders';
            this.collection = ladders;
            _.each(this.get(laddersKey), function(ladder, id) {
                ladders.add(new jangleFit.Models.Ladder(
                    {id: id, ladder: ladder}));
            });
        },

        getLadder: function(ladderId) {
            return this.collection.get(ladderId);
        }

    });

})();
