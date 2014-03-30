/*global jangleFit, Backbone*/

jangleFit.Routers = jangleFit.Routers || {};

(function () {
    'use strict';

    jangleFit.Routers.JanglefitRouter = Backbone.Router.extend({
        initialize: function() {
            Backbone.history.start({pushState:false});
        },

        routes: {
            '': 'initial',
            'about' : 'about',
            'settings' : 'settings',
            'chart4' : 'chart4',
            '*notFound' : 'initial'
        },

        initial: function() {
            new jangleFit.Views.InitialView();
        },

        chart4: function() {
            new jangleFit.Views.LadderView({
                collection: new jangleFit.Collections.LadderCollection()
            });
        },

        about: function() {
            var html = jangleFit.Templates['app/scripts/templates/about.hbs']();
            window.$('#jangleFit-app').html(html);
        },

        settings: function() {
            new jangleFit.Views.SettingsView();
        }
    });

})();
