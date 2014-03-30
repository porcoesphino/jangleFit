/*global jangleFit, Backbone*/

jangleFit.Views = jangleFit.Views || {};

(function () {
    'use strict';

    jangleFit.Views.SettingsView = Backbone.View.extend({

        el: '#jangleFit-app',

        template: jangleFit.Templates['app/scripts/templates/settings.hbs'],

        events: {
            'change input': 'fieldChanged',
            // TODO: This fires too for each option
            'change select': 'selectChanged'
        },

        initialize: function () {
            this.listenTo(jangleFit.currentUser, 'change', this.render);
            this.render();
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
        },
 
        fieldChanged: function(e){
            var field = $(e.currentTarget);
            var data = {};
            data[field.attr('id')] = field.val();
            jangleFit.currentUser.set(data);
        },

    });

})();
