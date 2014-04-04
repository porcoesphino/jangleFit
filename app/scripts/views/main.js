/*global jangleFit, Backbone*/

jangleFit.Views = jangleFit.Views || {};

(function () {
    'use strict';

    jangleFit.Views.MainView = Backbone.View.extend({

        initialize: function () {
            this.userView = new jangleFit.Views.UserCurrentView({model: this.model});
            this.rung = this.getCurrentRung(this.model);
            this.progressView = new jangleFit.Views.ProgressView({
                model: this.rung
            });
            this.sessionView = new jangleFit.Views.SessionView({
                model: this.rung
            });
            this.render();
        },

        render: function () {
            this.$el.append(this.userView.el);
            this.$el.append(this.progressView.el);
            this.$el.append(this.sessionView.el);
            return this;
        },

        close: function() {
            this.sessionView.close();
        },

        getCurrentRung: function(user) {
            var ladder = new jangleFit.Collections.LadderCollection();
            ladder.fetch();
            return ladder.get(user.get('level'));
        },

    });

})();
