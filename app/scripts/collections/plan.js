/*global _, jangleFit, Backbone*/

jangleFit.Collections = jangleFit.Collections || {};

(function () {
    'use strict';

    jangleFit.Collections.PlanCollection = Backbone.Collection.extend({

        initialize: function() {
            this.model = jangleFit.Models.Plan;
            this.add({
                title: '5BX',
                exercises: [
                    'Stretching',
                    'Sit-up',
                    'Back extension',
                    'Push-up',
                    ['Run', 'Stationary Run', 'One Mile Run', 'One Mile Walk']
                ],
                rungLabel: 'Level',
                ladders: {
                    'Chart 4': {
                        ladder: [
                            ['A+', 30, 22, 50, 42, 400, 7, 19],
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
                        ]
                    }
                }
            });
            this.getFromDisk();
        },

        getFromDisk: function() {
            var _this = this;
            jQuery.get('lifetime.md', function(data) {
                var lines = data.split('\n'),
                    notesCallback = function(line) {
                        if (line || line == '') {
                            plan.notes += line + '\n';
                        } else {
                            plan.notes = plan.notes.trim();
                        }
                    },
                    ladderCallback = function(tableName, line) {
                        var table = plan.ladders[tableName],
                            col;
                        if (line || line == '') {
                            if (line.substring(0,4) === '### ') {
                                col = line.substring(4);
                                if (table.rungLabel) {
                                    table.exercises.push(col);
                                } else {
                                    table.rungLabel = col;
                                }
                            } else if (!table.rungLabel) {
                                col = line.split('\t');
                                table.ladder.push(col);
                            }
                        } else {
                            table.ladder.reverse();
                            console.log("Hello");
                        }
                    },
                    plan = {
                        title: lines[0].substring(2),
                        notes: '',
                        ladders: {}
                    },
                    section, callback;
                lines.shift();
                _.each(lines, function(line) {
                    if (line) {
                        if (line.substring(0,3) === '## ') {
                            if (callback) {
                                callback();
                            }
                            section = line.substring(3);
                            switch(section) {
                            case 'Notes':
                                callback = notesCallback;
                                break;
                            default:
                                plan.ladders[section] = {
                                    exercises: [],
                                    ladder: []
                                };
                                callback = ladderCallback.bind(null, section);
                            }
                        } else {
                            if (callback) {
                                callback(line);
                            }
                        }
                    }
                });
                callback();
                _this.add(plan);
            });
        }

    });

})();
