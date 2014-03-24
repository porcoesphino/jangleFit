/*global jangleFit, Backbone*/

jangleFit.Routers = jangleFit.Routers || {};

(function () {
    'use strict';

    jangleFit.Routers.JanglefitRouter = Backbone.Router.extend({
        initialize: function() {
            Backbone.history.start({pushState:false});
        },

        routes: {
            '': 'chart4',
            'about' : 'about',
            'contact' : 'contact',
            'chart4' : 'chart4',
            '*notFound' : 'about'
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

        contact: function() {
            var template = jangleFit.Templates['app/scripts/templates/contact.hbs'];
            window.$('#jangleFit-app').html(template);
        }
    });

})();
