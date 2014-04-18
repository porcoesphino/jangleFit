/*global jangleFit, Backbone*/

jangleFit.Models = jangleFit.Models || {};

(function () {
    'use strict';

    jangleFit.Models.Progress = Backbone.Model.extend({

        initialize: function() {
            this.set('id', this.get('title'));
            this.localStorage = new Backbone.LocalStorage(jangleFit.store);
        },

        getLadder: function() {
            return this.get('ladder');
        },

        setLadder: function(ladder) {
            return this.set('ladder', ladder);
        },

        getLadderModel: function() {
            return jangleFit.plans.getLadder(this.getLadder());
        },

        getRung: function() {
            return this.get('rung');
        },

        setRung: function(rung) {
            return this.set('rung', rung);
        },

        getRungModel: function() {
            return this.getLadderModel().get(this.getRung());
        }

    });

})();
