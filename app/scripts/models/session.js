/*global jangleFit, Backbone*/

jangleFit.Models = jangleFit.Models || {};

(function () {
    'use strict';

    jangleFit.Models.Session = Backbone.Model.extend({

        localStorage: new Backbone.LocalStorage('janglefit-backbone-history'),

        initialize: function() {
            this.id = $.now();
            this.set('timestamp', this.id);
//            this.collection = new jangleFit.Collections.SetCollection();
        },

        addSet: function(set) {
            this.collection.add(set);
        }

    });

})();
