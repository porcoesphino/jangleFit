/*global jangleFit, Backbone*/

jangleFit.Collections = jangleFit.Collections || {};

(function () {
    'use strict';

    jangleFit.Collections.SetCollection = Backbone.Collection.extend({

        localStorage: new Backbone.LocalStorage('janglefit-backbone-history'),

        initialize: function () {
            this.model = jangleFit.Models.Set;
        },

    });

})();
