/*global jangleFit, Backbone*/

jangleFit.Views = jangleFit.Views || {};

(function () {
    'use strict';

    jangleFit.Views.CalendarView = Backbone.View.extend({

        className: 'cal-context',

        attributes: {'style': 'width:100%'},

        template: jangleFit.Templates['app/scripts/templates/calendar.hbs'],

        initialize: function() {
            this.render();
        },

        render: function () {
            this.$el.html(this.template());
            return this;
        },

    });

})();
