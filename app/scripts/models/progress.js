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

        getRemovedIndices: function(ladder) {
            var result = [],
            exercises = ladder.get('exercises'),
            totalI = 0,
            outerI, thisInnerI, thisInnerLength, innerMatch;
            for (outerI=0; outerI<exercises.length; outerI++) {
                if (Array.isArray(exercises[outerI])) {
                    innerMatch = this.get('select-'+outerI) + 1;
                    thisInnerLength = exercises[outerI].length;
                    for (thisInnerI=1; thisInnerI<thisInnerLength; thisInnerI++) {
                        if (thisInnerI !== innerMatch) {
                            result.push(totalI+thisInnerI-1);
                        }
                    }
                    totalI+=thisInnerLength-1;
                } else {
                    totalI++;
                }
            }
            return result;
        },

        removeColumns: function(rung, toRemoveIndices) {
            var i=0, val=toRemoveIndices[i];
            rung.set('exercises', rung.get('exercises').filter(
                function(item, index){
                    var keep = index !== val;
                    if (!keep) {
                        i++;
                        if (i < toRemoveIndices.length) {
                            val = toRemoveIndices[i];
                        } else {
                            val = undefined;
                        }
                    }
                    return keep;
                }
            ));
            return rung;
        },

        getRungName: function() {
            return this.get('rung');
        },

        setRungName: function(rung) {
            return this.set('rung', rung);
        },

        getRungHighest: function(doRemove) {
            var ladder = this.getLadder(),
            rung;
            if (ladder) {
                rung = ladder.getRungHighest();
                if (doRemove) {
                    rung = this.removeColumns(rung, this.getRemovedIndices(ladder));
                }
                return rung;
            }
        },

        getRung: function(rungId, offset, doRemove) {
            var ladder = this.getLadder(),
            rung;
            if (ladder) {
                rungId = typeof rungId !== 'undefined' ? rungId : this.getRungName();
                rung = ladder.getRung(rungId, offset);
                if (doRemove) {
                    rung = this.removeColumns(rung, this.getRemovedIndices(ladder));
                }
                return rung;
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
