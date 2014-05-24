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

        getRows: function(progress) {
            var rows = [],
            addIfExists = function(title, row) {
                if (row) {
                    var result = row.toJSON();
                    result.label = title;
                    rows.push(result);
                }
            },
            currentRung = progress.getRung(undefined, 0, true);
            addIfExists('Highest', progress.getRungHighest(true));
            addIfExists('Next', progress.getRung(currentRung.get('level'), -1, true));
            addIfExists('Current', currentRung);
            return rows;
        },

        render: function () {
            var json = this.model.toViewJSON(),
            progress = this.model,
            ladder = progress.getLadder();
            json.rows = this.getRows(progress);
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
