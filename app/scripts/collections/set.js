/*global jangleFit, Backbone*/

jangleFit.Collections = jangleFit.Collections || {};

(function () {
    'use strict';

    jangleFit.Collections.SetCollection = Backbone.Collection.extend({

        initialize: function () {
            this.model = jangleFit.Models.Set;
        },

    });

})();
