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

        // TODO: Horrible hack
        setLevel: function() {
            var level = jangleFit.user.getProgress('5BX').getRungName();
            if (level) {
                var option = this.$el.find('option:contains("'+level+'")');
                if (option.length !== 1) {
                    option = option.filter(
                        function(o, b) {
                            return b.innerText===level;
                        }
                    );
                }
                option.attr('selected', true);
            }
        },

        render: function () {
            this.$el.html(this.template(jangleFit.user.toJSON()));
            this.setLevel();
            return this;
        },

        selectChanged: function(e){
            var field = $(e.currentTarget);
            var value = $('option:selected', field).val();
            var data = {};
            data[field.attr('id')] = value;
//TODO: HACK
            jangleFit.user.getProgress('5BX').setRungName(value);
            jangleFit.user.save();
            this.setLevel();
        },
 
        fieldChanged: function(e){
            var field = $(e.currentTarget);
            var formGroup = field.parent().parent();
            if (field[0].checkValidity()) {
                var data = {};
                data[field.attr('id')] = field.val();
                jangleFit.user.set(data);
                formGroup[0].classList.remove('has-error');
            } else {
                formGroup[0].classList.add('has-error');
            }
        },

    });

})();
