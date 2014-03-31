/*global jangleFit, Backbone*/

jangleFit.Views = jangleFit.Views || {};

(function () {
    'use strict';

    jangleFit.Views.SettingsView = Backbone.View.extend({

        el: '#jangleFit-app',

        template: jangleFit.Templates['app/scripts/templates/settings.hbs'],

        events: {
            'change input': 'fieldChanged',
            // TODO: This fires for each option
            'change select': 'selectChanged'
        },

        initialize: function () {
            this.listenTo(jangleFit.currentUser, 'change', this.render);
            this.render();
            this.setLevel();
        },

        // TODO: Horrible hack
        setLevel: function() {
            var level = jangleFit.currentUser.get('level');
            if (level) {
                var option = $('option:contains("'+level+'")');
                if (option.length === 1) {
                    option = option[0];
                } else {
                    option = option.filter(
                        function(o, b) {
                            return b.innerText===level;
                        }
                    )[0];
                }
                option.selected = true;
            }
        },

        render: function () {
            if (jangleFit.currentUser && jangleFit.currentUser.isInitialised()) {
                this.$el.html(this.template(jangleFit.currentUser.toJSON()));
            } else {
                new jangleFit.Views.InitialView();
            }
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
