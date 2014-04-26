/*global jangleFit, Backbone*/

jangleFit.Views = jangleFit.Views || {};

(function () {
    'use strict';

    jangleFit.Views.SettingsView = Backbone.View.extend({

        tagName: 'form',

        className: 'form-horizontal center-block',

        attributes: {'role': 'form'},

        template: jangleFit.Templates['app/scripts/templates/settings.hbs'],

        events: {
            'change input': 'fieldChanged',
            // TODO: This fires for each option
            'change select': 'selectChanged'
        },

        initialize: function () {
            this.listenTo(jangleFit.user , 'change', this.render);
            this.render();
        },

        render: function () {
            var json = jangleFit.user.toJSON();
            json.plans.forEach(function(plan) {
                var progress = jangleFit.user.getProgress(plan.id),
                ladder;
                if (!progress) {
                    return;
                }
                ladder = progress.getLadder();
                if (!ladder) {
                    return;
                }
                plan.rungs = ladder.collection.map(
                    function (item) {
                        var result = {id: item.id};
                        if (result.id === progress.getRungName()) {
                            result.selected = true;
                        }
                        return result;
                    }
                );
            });
            this.$el.html(this.template(json));
            return this;
        },

        selectChanged: function(e){
            var field = $(e.currentTarget),
            value = $('option:selected', field).val(),
            id = field.attr('id'),
            planId = id.substring('level-'.length),
            data = {};
            data[id] = value;
            jangleFit.user.getProgress(planId).setRungName(value);
            jangleFit.user.save();
        },
 
        fieldChanged: function(e){
            var field = $(e.currentTarget),
            formGroup = field.parent().parent(),
            data;
            if (field[0].checkValidity()) {
                data = {};
                data[field.attr('id')] = field.val();
                jangleFit.user.set(data);
                formGroup[0].classList.remove('has-error');
            } else {
                formGroup[0].classList.add('has-error');
            }
        },

    });

})();
