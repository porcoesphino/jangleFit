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

        getDayString: function(dayIndex) {
            switch(dayIndex) {
            case 0:
                return 'Sunday';
            case 1:
                return 'Monday';
            case 2:
                return 'Tuesday';
            case 3:
                return 'Wednesday';
            case 4:
                return 'Thursday';
            case 5:
                return 'Friday';
            case 6:
                return 'Saturday';
            }
        },

        getDateWithOffset: function(offset) {
            var date = new Date();
            if (date.getDate - offset > 0) {
                return date.setDate(date.getDate() - offset);
            }
        },

        render: function () {
            var isWeekend = function(testDate) {
                return testDate.getDay() === 0 ||
                    testDate.getDay() === 6;
            },
            getDateString = function(testDate) {
                var dateString = testDate.getFullYear() + '-',
                temp = testDate.getMonth();
                if (temp < 10) {
                    dateString += '0';
                }
                dateString += temp + '-';
                temp = testDate.getDate();
                if (temp < 10) {
                    dateString += '0';
                }
                dateString += temp;
                return dateString;
            },
            getSessionList = function() {
                return [{
                    id: 1,
                    color: 'event-special',
                    title: '',
                    longTitle:''
                }];
            },
            json = {
                dayLabels: [],
                weeks: [
                    {weekLabel: 'This'},
                    {weekLabel: 'Last'}
                ]
            },
            dateCounter = new Date(),
            day;
            while (json.dayLabels.length < 7) {
                json.dayLabels.push(this.getDayString(dateCounter.getDay()));
                dateCounter.setDate(dateCounter.getDate() -1);
            }
            dateCounter = new Date();
            dateCounter.setHours(0);
            dateCounter.setMinutes(0);
            dateCounter.setSeconds(0);
            dateCounter.setMilliseconds(0);
            json.weeks.forEach(function(week) {
                week.days = [];
                while (week.days.length < 7) {
                    day = {
                        date: dateCounter.getDate(),
                        dateString: getDateString(dateCounter),
                        sessions: getSessionList()
                    };
                    if (week.weekLabel) {
                        day.weekLabel = week.weekLabel;
                        delete week.weekLabel;
                    }
                    if (isWeekend(dateCounter)) {
                        day.weekend = true;
                    }
                    week.days.push(day);
                    dateCounter.setDate(dateCounter.getDate() - 1);
                }
            });
            console.log(json);
            this.$el.html(this.template(json));
            return this;
        },

    });

})();
