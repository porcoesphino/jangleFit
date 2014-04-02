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
            '(/)about(/)' : 'about',
            '(/)settings(/)' : 'settings',
            '(/)chart4(/)' : 'chart4',
            '*notFound' : 'initial'
        },

        // TODO: hack
        selectMenu: function() {
            $('nav').find('.active').removeClass('active');

            var hash = window.location.hash;
            if (!hash) {
                $('#home').addClass('active');
                return;
            }
            var els = $('ul.nav a[href="'+ hash +'"]');
            if (els.length > 0) {
                els.parent().addClass('active');
                els.parents('.dropdown').addClass('active');
            } else {
                // 404's??
                $('#home').addClass('active');
            }
        },



        goWithMenuUpdate: function(el) {
            if (!this.mainEl) {
                this.mainEl = $('#jangleFit-app');
            }
            this.mainEl.html(el);
            this.selectMenu();
        },

        chart4: function() {
            var userHTML = '';
            if (jangleFit.currentUser && jangleFit.currentUser.isInitialised()) {
                userHTML = new jangleFit.Views.UserCurrentView({model: jangleFit    .currentUser}).render().el.innerHTML;
            }
            var ladderHTML = new jangleFit.Views.LadderView({
                collection: new jangleFit.Collections.LadderCollection()
            }).render().el;
            this.goWithMenuUpdate(userHTML + ladderHTML.innerHTML);
        },

        about: function() {
            this.goWithMenuUpdate(jangleFit.Templates['app/scripts/templates/about.hbs']());
        },

        updateIfAuth: function(elCreateFunc) {
            var el;
            if (!jangleFit.currentUser || !jangleFit.currentUser.isInitialised()) {
                el = new jangleFit.Views.UserNewView().render().el;
                this.navigate('');
            } else {
                el = elCreateFunc();
            }
            this.goWithMenuUpdate(el);
        },



        initial: function() {
            this.updateIfAuth( function() {
                var summaryHTML = new jangleFit.Views.UserCurrentView({model: jangleFit.currentUser}).render().el;
                var ladderHTML = new jangleFit.Views.LadderView({
                    collection: new jangleFit.Collections.LadderCollection()
                }).render().el;
                return summaryHTML.innerHTML + ladderHTML.innerHTML;
            });
        },

        settings: function() {
            this.updateIfAuth( function() {
                return new jangleFit.Views.SettingsView().render().el;
            });
        }
    });
})();
