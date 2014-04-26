/*global jangleFit, Backbone*/

jangleFit.Collections = jangleFit.Collections || {};

(function () {
    'use strict';

    jangleFit.Collections.SessionCollection = Backbone.Collection.extend({

        initialize: function() {
            this.model = jangleFit.Models.Session;
            this.localStorage = new Backbone.LocalStorage(jangleFit.storePrefix + '-sessions');
        },

        fetchAll: function() {
            this.fetch();
            this.each(function(session) {
                session.get('sets').forEach(function(setId){
                    var set = new jangleFit.Models.Set({id: setId});
                    set.fetch();
                    session.collection.add(set);
                });
            });
        }

    });

})();
