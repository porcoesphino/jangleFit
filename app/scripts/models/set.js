/*global jangleFit, Backbone*/

jangleFit.Models = jangleFit.Models || {};

(function () {
    'use strict';

    jangleFit.Models.Set = Backbone.Model.extend({

        defaults: {
            'activity': '',
            'duration': 0, // in seconds
            'amount':    0,
            'unit':    'times'
        },

        initialize: function() {
            this.localStorage = new Backbone.LocalStorage(jangleFit.storePrefix + '-sets');
            this.id = $.now();
            this.set('timestamp', this.id);
        },

    });

})();
