/*global jangleFit, Backbone*/

jangleFit.Views = jangleFit.Views || {};

(function () {
    'use strict';

    jangleFit.Views.UserNewView = Backbone.View.extend({

        template: jangleFit.Templates['app/scripts/templates/user-new.hbs'],

        events: {
            'submit': 'createUser'
        },

        render: function () {
            this.$el.html(this.template());
            return this;
        },

        createUser: function(event) {
            event.preventDefault();
            var givenName = this.$('#givenName').val().trim();
            var familyName = this.$('#familyName').val().trim();
            if (givenName && familyName) {
                this.model = new jangleFit.Models.User({
                    givenName: givenName,
                    familyName: familyName
                });
                this.model.save();

                // TODO: do we actually need this?
                jangleFit.currentUser = this.model;

                jangleFit.router.navigate('#/home', {trigger: true});
            }
        }

    });

})();
