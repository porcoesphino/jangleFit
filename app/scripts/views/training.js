/*global jangleFit, Backbone*/

jangleFit.Views = jangleFit.Views || {};

(function () {
    'use strict';

    jangleFit.Views.TrainingView = Backbone.View.extend({

        template: jangleFit.Templates['app/scripts/templates/training.hbs'],

        events: {
            'click button#next-btn': 'nextHandler',
        },

        initialize: function (options) {
            this.rung = this.model.getCurrentRung();
            this.render();
            this.$reps = this.$el.find('#reps');

            this.session = new jangleFit.Models.Session();
            this.progress = new jangleFit.Views.SessionView({
                el: this.$el.find('#session')[0],
                model: this.session
            });
            this.exNo = 0;
            this.count = '';
            this.renderPanel();
            this.startSet();
            this.counterStart();
        },

        close: function() {
            this.counterStop();
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },

        counterStart: function() {
            this.counter = setInterval(this.countDown.bind(this), 1000);
        },

        counterStop: function() {
            window.clearInterval(this.counter);
        },

        countDown: function() {
            if (!isNaN(this.count)) {
                this.count = this.count - 1;
                this.updateCounter();
            }
        },

        updateCounter: function() {
            var overtimeClass = 'text-danger';
            var $counterEl = this.$el.find('#timer');
            $counterEl.text(this.count);
            if (this.count < 0) {
                $counterEl.addClass(overtimeClass);
            } else {
                $counterEl.removeClass(overtimeClass);
            }
        },

        currentInterval: function() {
            var durations = [2, 1, 1, 1, 6];
            return durations[this.exNo]*60;
        },

        durationCompleted: function() {
            return this.currentInterval() - this.count;
        },

        startSet: function() {
            this.setCurrent = new jangleFit.Models.Set({
                activity: this.currentActivity()
            });
            this.session.addSet(this.setCurrent);
        },

        nextHandler: function(event) {
            event.preventDefault();
            if (!this.state) {
                this.state = 1;
                this.counterStop();
                this.renderButton();
                this.setCurrent.set('duration', this.durationCompleted());
                this.setCurrent.set('amount', this.$reps.val());
            } else {
                if (this.setCurrent) {
                    this.setCurrent.set('amount', this.$reps.val());
                }
                if (this.nextExercise()) {
                    this.state = 0;
                    this.startSet();
                    this.counterStart();
                }
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

        currentActivity: function() {
            var actions = ['Stretching', 'Sit-up', 'Extension', 'Push-up', 'Run'];
            return actions[this.exNo];
        },

        renderPanel: function() {
            this.renderButton();
            var exLabel = 'ex' + this.exNo;
            this.$el.find('#activity').text(this.currentActivity());
            this.$reps.val(this.rung.get(exLabel));
            this.count = this.currentInterval();
            this.updateCounter();
        },

        nextExercise: function () {
            if (this.exNo >= 4) {
                this.counterStop();
                this.$el.find('.jumbotron').get(0).innerHTML = '<h2 class="text-center">Congratulations!!</h2>';
                this.session.saveAll();
                jangleFit.router.dirty = false;
                return false;
            }
            this.exNo = this.exNo + 1;
            return true;
        }

    });

})();
