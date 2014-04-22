/*global jangleFit, Backbone*/

jangleFit.Models = jangleFit.Models || {};

(function () {
    'use strict';

    jangleFit.Models.Ladder = Backbone.Model.extend({

        initialize: function() {
            this.localStorage = new Backbone.LocalStorage(jangleFit.storePrefix + '-ladder');
            this.collection = new jangleFit.Collections.RungCollection();
            var ladder = this.get('ladder').map( function(rungList) {
                return {
                    level: rungList[0],
                    exercises: rungList.filter(
                        function(val, i) {
                            return i > 0;
                        }
                    )
                };
            });
            this.collection.add(ladder);
        },

        getRungHighest: function() {
            return this.collection.first();
        },

        getRungOffset: function(rungId, offset) {
            var actualIndex = this.collection.indexOf(this.getRung(rungId));
            return this.collection.models[actualIndex+offset];
        },

        getRung: function(rungId) {
            return this.collection.get(rungId);
        }

    });

})();
