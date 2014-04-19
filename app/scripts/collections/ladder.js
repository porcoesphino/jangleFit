/*global jangleFit, Backbone*/

jangleFit.Collections = jangleFit.Collections || {};

(function () {
    'use strict';

    jangleFit.Collections.LadderCollection = Backbone.Collection.extend({

        initialize: function () {
            this.model = jangleFit.Models.Ladder;
        },

    });

})();
