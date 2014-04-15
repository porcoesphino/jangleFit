/*global jangleFit, Backbone*/

jangleFit.Collections = jangleFit.Collections || {};

(function () {
    'use strict';

    jangleFit.Collections.RungCollection = Backbone.Collection.extend({

        initialize: function () {
            this.model = jangleFit.Models.Rung;
        },

        /* TODO: A horrible hack to fix */
        fetch: function() {
            var table = [['A+', 30, 22, 50, 42, 400, 7, 19],
                         ['A', 30, 22, 49, 40, 395, 7, 19],
                         ['A-', 30, 22, 49, 37, 390, 7, 19],
                         ['B+', 28, 21, 47, 34, 380, 7.25, 19],
                         ['B', 28, 21, 46, 32, 375, 7.25, 20],
                         ['B-', 28, 21, 46, 30, 365, 7.25, 20],
                         ['C+', 26, 19, 44, 28, 355, 7.5, 21],
                         ['C', 26, 19, 43, 26, 345, 7.5, 21],
                         ['C-', 26, 19, 43, 24, 335, 7.5, 21],
                         ['D+', 24, 18, 41, 21, 325, 7.75, 23],
                         ['D', 24, 18, 40, 19, 315, 7.75, 23],
                         ['D-', 24, 18, 40, 17, 300, 7.75, 23]
                         ].map( function(item) {
                return {
                    level: item[0],
                    ex0: item[1],
                    ex1: item[2],
                    ex2: item[3],
                    ex3: item[4],
                    ex4: item[5],
                    ex5: item[6],
                    ex6: item[7]
                };
            });
            this.add(table);
        }

    });

})();
