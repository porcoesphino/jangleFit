/*global jangleFit, Backbone*/

jangleFit.Models = jangleFit.Models || {};

(function () {
    'use strict';

    jangleFit.Models.Progress = Backbone.Model.extend({

        initialize: function() {
            this.set('id', this.get('title'));
            this.localStorage = new Backbone.LocalStorage(jangleFit.store);
        },

        getLevel: function() {
            var chain = this.get('levelChain');
            return chain[chain.length-1].level;
        },

        getCurrentRung: function() {
            var level = this.getLevel();
            return jangleFit.plans.getLadder().get(level);
        },

    });

})();
