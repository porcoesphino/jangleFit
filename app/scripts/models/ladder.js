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

        getRung: function(rungId, offset) {
            var rung = this.collection.get(rungId),
            rungIndex = this.collection.indexOf(rung);
            offset = typeof offset !== 'undefined' ? offset : 0;
            return this.collection.models[rungIndex+offset];
        }

    });

})();
