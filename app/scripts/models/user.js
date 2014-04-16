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
                    levelChain: [
                        {prefix: 'Chart', level: '4'},
                        {prefix: 'Level', level: 'D-'}
                    ]
                }, {
                    title: 'Hackers',
                    levelChain: [
                        {prefix: 'Level', level: '100'},
                    ]
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

        plansToJSON: function() {
            if(!this.collection) {
                this.addPlans(this.get('plans'));
            }
            return this.collection.models.map( function(item) {return item.toJSON();});
        },

        toJSON: function() {
            var result = Backbone.Model.prototype.toJSON.call(this);
            result.plans = this.plansToJSON();
            return result;
        },

        initialize: function() {
            this.localStorage = new Backbone.LocalStorage('janglefit');
            this.fetch();
            //
            this.on('change', this.localSave, this);
        },

        // TODO: remove this hideousness
        localSave: function() {
            this.save();
        },

        isInitialised: function() {
            return this.get('givenName') && this.get('familyName');
        },

        getPlanMeta: function(title) {
            return this.collection.get(title);
        }

    });

})();
