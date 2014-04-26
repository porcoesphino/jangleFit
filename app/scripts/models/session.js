/*global _, jangleFit, Backbone*/

jangleFit.Models = jangleFit.Models || {};

(function () {
    'use strict';

    jangleFit.Models.Session = Backbone.Model.extend({

        initialize: function() {
            this.localStorage = new Backbone.LocalStorage(jangleFit.storePrefix + '-sessions');
            this.set('timestamp', this.id);
            this.collection = new jangleFit.Collections.SetCollection();
        },

        saveAll: function() {
            _.each(this.collection.models, function(set) {
                set.save();
            });
            this.save();
        },

        addSet: function(set) {
            var key = 'sets';
            var list = this.get(key);
            if (!list) {
                list = [];
            }
            list.push(set.id);
            this.set(key, list);
            this.collection.add(set);
        }

    });

})();
