/*global _, jangleFit, Backbone*/

jangleFit.Views = jangleFit.Views || {};

(function () {
    'use strict';

    jangleFit.Views.TodayView = Backbone.View.extend({

        template: jangleFit.Templates['app/scripts/templates/today.hbs'],

        initialize: function() {
            this.render();
        },

        events: {
            'click button#start-btn': 'startHandler',
            'change select': 'selectChanged'
        },

        startHandler: function() {
            jangleFit.router.navigate('#/training/' + this.model.get('title'));
        },

        selectChanged: function(e){
            var target = e.target;
            this.model.set(target.id, target.selectedIndex);
            jangleFit.user.save();
            this.render(); // TODO: Cleanup this render
        },

        getRemovedIndices: function(ladder) {
            var result = [],
            exercises = ladder.get('exercises'),
            totalI = 0,
            outerI, thisInnerI, thisInnerLength, innerMatch;
            for (outerI=0; outerI<exercises.length; outerI++) {
                if (Array.isArray(exercises[outerI])) {
                    innerMatch = this.model.get('select-'+outerI) + 1;
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


        removeColumns: function(rows, toRemoveIndices) {
            rows.forEach(function(row) {
                var i=0, val=toRemoveIndices[i];
                row.exercises = row.exercises.filter(
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
                );
            });
            return rows;
        },

        getRows: function(progress, ladder) {
            var rows = [],
            addIfExists = function(title, row) {
                if (row) {
                    var result = row.toJSON();
                    result.label = title;
                    rows.push(result);
                }
            },
            currentRung = progress.getRung();
            if (ladder) {
                addIfExists('Highest', ladder.getRungHighest());
                addIfExists('Next', ladder.getRungOffset(currentRung, -1));
            }
            addIfExists('Current', currentRung);
            return this.removeColumns(rows,
                this.getRemovedIndices(ladder));
        },

        render: function () {
            var json = this.model.toViewJSON(),
            progress = this.model,
            ladder = progress.getLadder();
            json.rows = this.getRows(progress, ladder);
            json.exerciseLabels = _.map(ladder.get('exercises'), function(ex, index) {
                if (Array.isArray(ex)) {
                    var id = 'select-'+index,
                    selectedI = progress.get(id);
                    return {
                        isCombo: true,
                        label: ex[0],
                        //TODO: Remove this tail call
                        options: _.map(_.tail(ex), function(item, index) {
                            var result = {
                                name: item,
                                selected: false
                            };
                            if (index === selectedI) {
                                result.selected = true;
                            }
                            return result;
                        })
                    };
                } else {
                    return {
                        isCombo: false,
                        label: ex
                    };
                }
            });
            this.$el.html(this.template(json));
            return this;
        },

    });

})();
