/*global jangleFit, Backbone*/

jangleFit.Collections = jangleFit.Collections || {};

(function () {
    'use strict';

    jangleFit.Collections.ProgressCollection = Backbone.Collection.extend({

        initialize: function () {
            this.model = jangleFit.Models.Progress;
        },

    });

})();
