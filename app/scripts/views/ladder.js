/*global jangleFit, Backbone*/

jangleFit.Views = jangleFit.Views || {};

(function () {
    'use strict';

    jangleFit.Views.LadderView = Backbone.View.extend({

        template: jangleFit.Templates['app/scripts/templates/ladder.hbs'],

        initialize: function () {
            this.render();
        },

        render: function () {
            var json = this.model.toJSON(),
                i, j, item;
            json.labelsUpper = [
                {
                    title: json.rungLabel,
                    rowSpan: 2
                }
            ];
            for (i=0; i<json.exercises.length;i++) {
                item = json.exercises[i];
                if (Array.isArray(item)) {
                    if (!json.labelsLower) {
                        json.labelsLower = [];
                    }
                    json.labelsUpper.push({
                        title: item[0],
                        colSpan: item.length-1,
                        rowSpan: 1
                    });
                    for (j=1; j<item.length; j++) {
                        json.labelsLower.push(item[j]);
                    }
                } else {
                    json.labelsUpper.push({
                        title: item,
                        rowSpan: 2
                    });
                }
            }
            if (!json.labelsLower) {
                for (i=0; i<json.labelsUpper.length;i++) {
                    delete json.labelsUpper[i].rowSpan;
                }
            }
            this.$el.html(this.template(json));
            this.addRungs();
            return this;
        },

        addRung: function (rung) {
            var view = new jangleFit.Views.RungView({ model: rung});
            this.$el.find('tbody').append(view.render().el);
        },

        addRungs: function () {
            this.model.collection.each(this.addRung, this);
        }
    });

})();
