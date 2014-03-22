/*global jangleFit, Backbone*/

jangleFit.Models = jangleFit.Models || {};

(function () {
    'use strict';

    jangleFit.Models.RungModel = Backbone.Model.extend({

/*        url: '',

        initialize: function() {
        },
*/
        defaults: {
            level: 'F',
            ex1: 0,
            ex2: 0,
            ex3: 0,
            ex4: 0,
            ex5: 0,
            ex6: 0,
            ex7: 0
        },

/*        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
*/
    });

})();
