/*global jangleFit, Backbone*/

jangleFit.Models = jangleFit.Models || {};

(function () {
    'use strict';

    jangleFit.Models.Progress = Backbone.Model.extend({

        initialize: function() {
            this.set('id', this.get('title'));
            this.localStorage = new Backbone.LocalStorage(jangleFit.store);
        },

        getPlan: function() {
            return jangleFit.plans.get(this.get('title'));
        },

        getLadderName: function() {
            return this.get('ladder');
        },

        setLadderName: function(ladder) {
            return this.set('ladder', ladder);
        },

        getLadder: function() {
            var plan = this.getPlan();
            if (plan) {
                return plan.getLadder(this.getLadderName());
            }
        },

        getRungName: function() {
            return this.get('rung');
        },

        setRungName: function(rung) {
            return this.set('rung', rung);
        },

        getRung: function() {
            var ladder = this.getLadder();
            if (ladder) {
                return this.getLadder().getRung(this.getRungName());
            }
        },

        getColors: function() {
            return {
                Red: {
                    class: 'event-important'
                },
                Black: {
                    class: 'event-inverse'
                },
                Grey: {
                    class: ''
                },
                Purple: {
                    class: 'event-special'
                },
                Yellow: {
                    class: 'event-warning'
                },
                Blue: {
                    class: 'event-info'
                },
                Green: {
                    class: 'event-success'
                }
            };
        },

        getColorName: function() {
            return this.get('color');
        },

        getColorClass: function() {
            var c = this.getColors()[this.getColorName()];
            if (c) {
                return c.class;
            }
        },

        setColor: function(color) {
            var result = this.set('color', color);
            return result;
        },

        toViewJSON: function() {
            var json = this.toJSON();
            json.colorClass = this.getColorClass();
            return json;
        }

    });

})();
