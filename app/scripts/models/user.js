/*global jangleFit, Backbone*/

jangleFit.Models = jangleFit.Models || {};

(function () {
    'use strict';

    jangleFit.Models.User = Backbone.Model.extend({

        id: 'user',

        defaults: {
            plans: [
                {
                    title: '5BX',
                    ladder: 'Chart 4',
                    rung: 'D-'
                }, {
                    title: 'Hackers',
                    ladder: 'Lifetime Ladder',
                    rung: '16'
                }
            ]
        },

        addPlans: function(plans) {
            this.collection = new jangleFit.Collections.ProgressCollection();
            this.collection.add(plans);
            this.unset('plans', {silent: true});
        },

        parse: function(response) {
            var planList = this.get('plans');
            if (response.plans) {
                planList = response.plans;
            }
            this.addPlans(planList);
            delete response.plans;
            return response;
        },

        getPlans: function() {
            if(!this.collection) {
                this.addPlans(this.get('plans'));
            }
        },

        toJSON: function() {
            var result = Backbone.Model.prototype.toJSON.call(this);
            this.getPlans();
            result.plans = this.collection.models.map( function(item) {return item.toJSON();});
            return result;
        },

        toViewJSON: function() {
            var result = Backbone.Model.prototype.toJSON.call(this);
            this.getPlans();
            result.plans = this.collection.models.map( function(item) {return item.toViewJSON();});
            return result;
        },


        initialize: function() {
            this.localStorage = new Backbone.LocalStorage('janglefit');
            this.fetch();

            this.on('change', this.localSave, this);
        },

        // TODO: remove this hideousness
        localSave: function() {
            this.save();
        },

        isInitialised: function() {
            return this.get('givenName') && this.get('familyName');
        },

        getProgress: function(title) {
            return this.collection.get(title);
        },

        getHistory: function() {
            if (!this.sessions){
                this.sessions = new jangleFit.Collections.SessionCollection();
                this.sessions.fetchAll();
            }
            return this.sessions;
        }

    });

})();
