/*global jangleFit, Backbone*/

jangleFit.Views = jangleFit.Views || {};

(function () {
    'use strict';

    jangleFit.Views.SessionView = Backbone.View.extend({

        template: jangleFit.Templates['app/scripts/templates/session.hbs'],

        events: {
            'click button#next-btn': 'nextHandler',
            'click button#start-btn': 'startHandler'
        },

        initialize: function (options) {
            this.rung = options.rung;
            this.render();
        },

        close: function() {
            this.counterStop();
        },

        render: function () {
            this.$el.html(this.template());
            return this;
        },

        counterStart: function() {
            this.counter = setInterval(this.countDown.bind(this), 1000);
        },

        counterStop: function() {
// TODO: remove
            console.debug('Killing timer');
            window.clearInterval(this.counter);
        },

        countDown: function() {
// TODO: remove
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

        startHandler: function(event) {
            event.preventDefault();
            jangleFit.router.dirty = true;
            this.$el.find('#start').hide();
            this.$el.find('#update').show();
            this.exNo = 0;
            this.count = '';
            this.renderPanel();
            this.counterStart();
        },

        nextHandler: function(event) {
            event.preventDefault();
            if (!this.state) {
                this.state = 1;
                this.counterStop();
                this.renderButton();
            } else {
                this.state = 0;
                this.nextExercise();
                this.counterStart();
                this.renderPanel();
            }
        },

        renderButton: function() {
            var button = this.$el.find('#next-btn');
            var buttonText = 'Done!';
            if (button.text() === buttonText) {
                buttonText = 'Next!';
            }
            button.text(buttonText);
        },

        renderPanel: function() {

            this.renderButton();

            var actions = ['Stretching', 'Sit-up', 'Extension', 'Push-up', 'Run'];
            var durations = [2, 1, 1, 1, 6];
            var exLabel = 'ex' + this.exNo;
            this.$el.find('#activity').text(actions[this.exNo]);
            this.$el.find('#reps').attr('value', this.rung.get(exLabel));
            this.count = durations[this.exNo]*60;
            this.updateCounter();
        },

        nextExercise: function () {
            this.exNo = this.exNo + 1;
            if (this.exNo >= 5) {
                this.counterStop();
                $('#jangleFit-app').find('.jumbotron').html('<h2 class="form-signin-heading text-center">Congratulations!!</h2>');
                jangleFit.router.dirty = false;
            }
        }

    });

})();
