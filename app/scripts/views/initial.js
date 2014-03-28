/*global jangleFit, Backbone*/

jangleFit.Views = jangleFit.Views || {};

(function () {
    'use strict';

    jangleFit.Views.InitialView = Backbone.View.extend({

        el: '#jangleFit-app',

        templateNewUser: jangleFit.Templates['app/scripts/templates/user-new.hbs'],
        templateOldUser: jangleFit.Templates['app/scripts/templates/user-current.hbs'],

        events: {
            'submit': 'createUser'
        },

        initialize: function () {
            var temp = new jangleFit.Models.User();
            temp.fetch();
            if (temp.isInitialised()) {
                jangleFit.currentUser = temp;
            }

            this.render();
        },

        render: function () {
            if (jangleFit.currentUser) {
                this.$el.html(this.templateOldUser(jangleFit.currentUser.toJSON()));
            } else {
                this.$el.html(this.templateNewUser());
            }
            return this;
        },

        createUser: function(event) {
            event.preventDefault();
            var givenName = this.$('#given').val().trim();
            var familyName = this.$('#family').val().trim();
            if (givenName && familyName) {
                jangleFit.currentUser = new jangleFit.Models.User({
                    givenName: givenName,
                    familyName: familyName
                });
                jangleFit.currentUser.save();
                this.model = jangleFit.currentUser;
                this.render();
            }

        }

    });

})();
