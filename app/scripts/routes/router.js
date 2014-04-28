/*global _, jangleFit, Backbone, confirm*/

jangleFit.Routers = jangleFit.Routers || {};

(function () {
    'use strict';

    jangleFit.Routers.JanglefitRouter = Backbone.Router.extend({
        initialize: function() {

            _.bindAll(this, 'beforeUnload', 'hashChange');
            // this will run before backbone's route handler
            $(window).on('hashchange', this.hashChange);

            $(window).on('beforeunload', this.beforeUnload);
            Backbone.history.start({pushState:false});
        },

        routes: {
            // TODO: clean these up
            '(/)': 'initial',
            '(/)jangleFit': 'initial',
            '(/)janglefit': 'initial',
            '(/)today/:plan(/)' : 'today',
            '(/)training/:plan(/)' : 'training',
            '(/)settings(/)' : 'settings',
            '(/)log(/)' : 'log',
            '(/)about(/)' : 'about',
            '(/)login(/)' : 'login',
            '(/)reference/:plan/:ladder(/)' : 'reference',
            '*notFound' : 'unknown'
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

        goWithMenuUpdate: function(view) {
            if (!this.mainEl) {
                this.mainEl = $('#jangleFit-app');
            }
            if (this.currentView) {
                if (this.currentView.close) {
                    this.currentView.close();
                }
                this.currentView.remove();
            }
            this.currentView = view;
            this.dirty = false;
            this.mainEl.html(view.el);
            this.selectMenu();
        },

        unknown: function() {
            this.goWithMenuUpdate(
                new Backbone.View({
                    el: jangleFit.Templates['app/scripts/templates/404.hbs']()
                })
            );
        },

        reference: function(planId, ladderId) {
            var plan = jangleFit.plans.get(planId);
            var ladder;
            if (plan) {
                ladder = plan.getLadder(ladderId);
            }
            if (!ladder) {
                this.unknown();
            }
            this.goWithMenuUpdate(
                new jangleFit.Views.LadderView({
                    model: ladder
                })
            );
        },

        about: function() {
            this.goWithMenuUpdate(new Backbone.View({el: jangleFit.Templates['app/scripts/templates/about.hbs']()}));
        },

        login: function() {
            var view = new jangleFit.Views.LoginView();
            this.goWithMenuUpdate(view);
        },

        updateIfAuth: function(viewCreateFunc) {
            var view;
            if (!jangleFit.user || !jangleFit.user.isInitialised()) {
                view = new jangleFit.Views.LoginView();
                this.navigate('');
            } else {
                jangleFit.storePrefix = 'janglefit-' + jangleFit.user.get('givenName').toLowerCase();
                view = viewCreateFunc();
            }
            this.goWithMenuUpdate(view);
        },

        initial: function() {
            this.updateIfAuth( function() {
                return new jangleFit.Views.HomeView({model: jangleFit.user});
            });
        },

        today: function(plan) {
            this.updateIfAuth( function() {
                return new jangleFit.Views.TodayView({
                    model: jangleFit.user.getProgress(plan)
                });
            });
        },

        training: function(plan) {
            this.updateIfAuth( function() {
                return new jangleFit.Views.TrainingView({
                    model: jangleFit.user.getProgress(plan)
                });
            });
        },

        settings: function() {
            this.updateIfAuth( function() {
                return new jangleFit.Views.SettingsView();
            });
        },

        log: function() {
            this.updateIfAuth( function() {
                return new jangleFit.Views.LogView();
            });
        },

        // Code based on:
        // http://mikeygee.com/blog/backbone.html
        //
        // add the following function to your router
        // for any view that may have a dirty condition, set a property named dirty to true, and if the user navigates away, a confirmation dialog will show
        hashChange : function(evt) {
            // cancel out if just reverting the URL
            if(this.cancelNavigate) {
                evt.stopImmediatePropagation();
                this.cancelNavigate = false;
                return;
            }
            if(this.currentView && this.dirty) {
                var dialog = confirm('You have unsaved changes. Exit?');
                if(dialog === true) {
                    return;
                } else {
                    evt.stopImmediatePropagation();
                    this.cancelNavigate = true;
                    window.location.href = evt.originalEvent.oldURL;
                    jangleFit.router.selectMenu();
                }
            }
        },

        beforeUnload : function() {
            if(this.currentView && this.dirty) {
                return 'You have unsaved changes. Exit?';
            }
        }
    });
})();
