/*global jangleFit, Backbone*/

jangleFit.Views = jangleFit.Views || {};

(function () {
    'use strict';

    jangleFit.Views.HomeView = Backbone.View.extend({

        template: jangleFit.Templates['app/scripts/templates/home.hbs'],
        initialize: function() {
            this.render();
            this.calendar = new jangleFit.Views.CalendarView({
                el: this.$el.find('#calendar')[0]
            });
        },

        render: function () {
            var json = this.model.toJSON();
            this.$el.html(this.template(json));
            return this;
        },

    });

})();
