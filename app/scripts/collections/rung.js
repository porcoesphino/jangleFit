/*global jangleFit, Backbone*/

jangleFit.Collections = jangleFit.Collections || {};

(function () {
    'use strict';

    jangleFit.Collections.RungCollection = Backbone.Collection.extend({

        initialize: function () {
            this.model = jangleFit.Models.Rung;
        },

    });

})();
