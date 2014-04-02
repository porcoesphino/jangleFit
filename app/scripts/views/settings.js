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
            this.listenTo(jangleFit.currentUser, 'change', this.render);
            this.render();
        },

        // TODO: Horrible hack
        setLevel: function() {
            var level = jangleFit.currentUser.get('level');
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
            this.$el.html(this.template(jangleFit.currentUser.toJSON()));
            this.setLevel();
            return this;
        },

        selectChanged: function(e){
            var field = $(e.currentTarget);
            var value = $('option:selected', field).val();
            var data = {};
            data[field.attr('id')] = value;
            jangleFit.currentUser.set(data);
            this.setLevel();
        },
 
        fieldChanged: function(e){
            var field = $(e.currentTarget);
            var formGroup = field.parent().parent();
            if (field[0].checkValidity()) {
                var data = {};
                data[field.attr('id')] = field.val();
                jangleFit.currentUser.set(data);
                formGroup[0].classList.remove('has-error');
            } else {
                formGroup[0].classList.add('has-error');
            }
        },

    });

})();
