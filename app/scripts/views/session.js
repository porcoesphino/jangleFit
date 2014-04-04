/*global jangleFit, Backbone*/

jangleFit.Views = jangleFit.Views || {};

(function () {
    'use strict';

    jangleFit.Views.SessionView = Backbone.View.extend({

        template: jangleFit.Templates['app/scripts/templates/session.hbs'],

        events: {
            'click button#next': 'nextExercise'
        },

        initialize: function () {
            this.exNo = 0;
            this.count = '';
            this.render();
            this.counter = setInterval(this.countDown.bind(this), 1000);
        },

        close: function() {
// TODO: remove
            console.debug('Killing timer');
            window.clearInterval(this.counter);
            jangleFit.router.off('route', this.onRoute);
        },

        render: function () {
            this.$el.html(this.template());
            this.updatePanel();
            return this;
        },

        countDown: function() {
            console.debug('working');
            if (!isNaN(this.count)) {
                this.count = this.count - 1;
                this.updateCounter();
            }
        },

        updateCounter: function() {
            var overtimeClass = 'text-danger';
            var counterEl = this.$el.find('#timer');
            counterEl.text(this.count);
            if (this.count < 0) {
                counterEl.addClass(overtimeClass);
            } else {
                counterEl.removeClass(overtimeClass);
            }
        },

        updatePanel: function() {
            var actions = ['Stretching', 'Sit-up', 'Extension', 'Push-up', 'Run'];
            var durations = [2, 1, 1, 1, 6];
            var exLabel = 'ex' + this.exNo;
            this.$el.find('#activity').text(actions[this.exNo]);
            this.$el.find('#reps').attr('value', this.model.get(exLabel));
            this.count = durations[this.exNo]*60;
            this.updateCounter();
        },

        nextExercise: function (event) {
            event.preventDefault();
            this.exNo = this.exNo + 1;
            if (this.exNo < 5) {
                this.updatePanel();
            } else {
                this.close();
                $('#jangleFit-app').find('.jumbotron').html('<h2 class="form-signin-heading text-center">Congratulations!!</h2>');
            }
        }

    });

})();
