/*global jangleFit, Backbone*/

jangleFit.Views = jangleFit.Views || {};

(function () {
    'use strict';

    jangleFit.Views.LogView = Backbone.View.extend({

        template: jangleFit.Templates['app/scripts/templates/log.hbs'],

        initialize: function () {
            this.model = jangleFit.user.getHistory();
            this.render();
        },

        render: function () {
            var sessions = [],
            insertZero = function(num) {
                if (num < 10) {
                    return '0' + num;
                }
                return '' + num;
            };
            jangleFit.user.sessions.each(
                function(session) {
                    var d = new Date(session.get('timestamp')),
                    timestring = d.getFullYear() + '-' +
                    insertZero(d.getMonth()) + '-' +
                    insertZero(d.getDate()) + ' ' +
                    insertZero(d.getHours()) + ':' +
                    insertZero(d.getMinutes()) + ':' +
                    insertZero(d.getSeconds());

                    sessions.push({
                        id: session.id,
                        timestamp: timestring,
                        plan: session.get('plan'),
                        ladder: session.get('ladder'),
                        rung: session.get('rung'),
                        sets: session.collection.map(
                            function(item) {
                                var json = item.toJSON();
                                json.timestamp = new Date(json.timestamp).toLocaleTimeString();
                                return json;
                            })
                    });
                });
            var json = {sessions: sessions};
            this.$el.html(this.template(json));
            return this;
        },

    });

})();
