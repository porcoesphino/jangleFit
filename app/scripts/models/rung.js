/*global jangleFit, Backbone*/

jangleFit.Models = jangleFit.Models || {};

(function () {
    'use strict';

    jangleFit.Models.RungModel = Backbone.Model.extend({

        initialize: function() {
            this.set('id', this.get('level'));
        }

    });

})();
