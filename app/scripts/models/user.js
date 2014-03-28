/*global jangleFit, Backbone*/

jangleFit.Models = jangleFit.Models || {};

(function () {
    'use strict';

    jangleFit.Models.User= Backbone.Model.extend({

        id: 'current-user',

        localStorage: new Backbone.LocalStorage('janglefit-backbone-user-data'),

        isInitialised: function() {
            return this.get('givenName') && this.get('familyName');
        }

    });

})();
