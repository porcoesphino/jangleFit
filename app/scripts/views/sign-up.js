/*global jangleFit, Backbone*/

jangleFit.Views = jangleFit.Views || {};

(function () {
    'use strict';

    jangleFit.Views.SignupView = Backbone.View.extend({

        tagName: 'form',

        className: 'form-login center-block',

        attributes: {'role': 'form'},

        template: jangleFit.Templates['app/scripts/templates/sign-up.hbs'],

        initialize: function() {
            this.render();
        },

        events: {
            'submit': 'createUser'
        },

        render: function () {
            this.$el.html(this.template());
            return this;
        },

        getIfValid: function($field) {
            if ($field[0].checkValidity()) {
//                 formGroup[0].classList.remove('has-error');
                return $field.val().trim();
            } else {
//                 formGroup[0].classList.add('has-error');
                return undefined;
            }
        },

        createUser: function(event) {
            event.preventDefault();
            var givenName = this.getIfValid(this.$('#givenName'));
            var familyName = this.getIfValid(this.$('#familyName'));
            var email = this.getIfValid(this.$('#email'));
            if (givenName && familyName && email) {
                this.model = new jangleFit.Models.User({
                    givenName: givenName,
                    familyName: familyName,
                    email: email
                });
                this.model.save();

                // TODO: do we actually need this?
                jangleFit.user = this.model;

                jangleFit.router.navigate('#/', {trigger: true});
            }
        }

    });

})();
