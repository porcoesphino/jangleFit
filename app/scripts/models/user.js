/*global jangleFit, Backbone*/

jangleFit.Models = jangleFit.Models || {};

(function () {
    'use strict';

    jangleFit.Models.User= Backbone.Model.extend({

        id: 'current-user',

        defaults: {level: 'D-'},

        localStorage: new Backbone.LocalStorage('janglefit-backbone-user-data'),

        initialize: function() {
            this.on('change', this.localSave, this);
        },

        // TODO: remove this hideousness
        localSave: function() {
            this.save();
        },

        isInitialised: function() {
            return this.get('givenName') && this.get('familyName');
        }

    });

})();
