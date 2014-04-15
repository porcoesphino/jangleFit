/*global jangleFit, Backbone*/

jangleFit.Models = jangleFit.Models || {};

(function () {
    'use strict';

    jangleFit.Models.Rung = Backbone.Model.extend({

        initialize: function() {
            this.set('id', this.get('level'));
        }

    });

})();
