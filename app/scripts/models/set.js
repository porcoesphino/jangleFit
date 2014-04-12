/*global jangleFit, Backbone*/

jangleFit.Models = jangleFit.Models || {};

(function () {
    'use strict';

    jangleFit.Models.Set = Backbone.Model.extend({

        localStorage: new Backbone.LocalStorage('janglefit-backbone-sets'),
        defaults: {
            'activity': '',
            'duration': 0, // in seconds
            'amount':    0,
            'unit':    'times'
        },

        initialize: function() {
            this.id = $.now();
            this.set('timestamp', this.id);
        },

    });

})();
