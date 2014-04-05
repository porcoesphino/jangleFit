/*global jangleFit, Backbone, confirm*/

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
            '': 'initial',
            '(/)settings(/)' : 'settings',
            '(/)log(/)' : 'log',
            '(/)about(/)' : 'about',
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
            this.mainEl.html(view.el);
            this.selectMenu();
        },

        chart4: function() {
            this.goWithMenuUpdate(
                new jangleFit.Views.LadderView({
                    collection: new jangleFit.Collections.LadderCollection()
                })
            );
        },

        about: function() {
            this.goWithMenuUpdate(new Backbone.View({el: jangleFit.Templates['app/scripts/templates/about.hbs']()}));
        },

        updateIfAuth: function(viewCreateFunc) {
            var view;
            if (!jangleFit.currentUser || !jangleFit.currentUser.isInitialised()) {
                view = new jangleFit.Views.UserNewView();
                this.navigate('');
            } else {
                view = viewCreateFunc();
            }
            this.goWithMenuUpdate(view);
        },



        initial: function() {
            this.updateIfAuth( function() {
                return new jangleFit.Views.MainView({model: jangleFit.currentUser});
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

        // Stolen Code
        //
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
            if(this.currentView && this.currentView.dirty) {
                var dialog = confirm('You have unsaved changes. To stay on the page, press cancel. To discard changes and leave the page, press OK');
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
            if(this.currentView && this.currentView.dirty) {
                return 'You have unsaved changes. If you leave or reload this page, your changes will be lost.';
            }
        }
    });
})();
