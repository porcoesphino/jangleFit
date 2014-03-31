/*global jangleFit, Backbone*/

jangleFit.Routers = jangleFit.Routers || {};

(function () {
    'use strict';

    jangleFit.Routers.JanglefitRouter = Backbone.Router.extend({
        initialize: function() {
            Backbone.history.start({pushState:false});
        },

        routes: {
            // TODO: clean these up
            '': 'initial',
            'about' : 'about',
            '/about' : 'about',
            'settings' : 'settings',
            '/settings' : 'settings',
            'chart4' : 'chart4',
            '/chart4' : 'chart4',
            '*notFound' : 'initial'
        },

        // TODO: hack
        selectMenu: function() {
            $('nav').find('.active').removeClass('active');

            var hash = window.location.hash;
            var els = $('ul.nav a[href="'+ hash +'"]');
            if (els.length > 0) {
                els.parent().addClass('active');
                els.parents('.dropdown').addClass('active');
            } else {
                // 404's??
                $('#home').addClass('active');
            }
        },

        initial: function() {
            new jangleFit.Views.InitialView();
            this.selectMenu();
        },

        chart4: function() {
            new jangleFit.Views.LadderView({
                collection: new jangleFit.Collections.LadderCollection()
            });
            this.selectMenu();
        },

        about: function() {
            var html = jangleFit.Templates['app/scripts/templates/about.hbs']();
            window.$('#jangleFit-app').html(html);
            this.selectMenu();
        },

        settings: function() {
            if (jangleFit.currentUser && jangleFit.currentUser.isInitialised()) {
                new jangleFit.Views.SettingsView();
            } else {
                window.location.hash = 'home';
            }
            this.selectMenu();
        }
    });

})();
