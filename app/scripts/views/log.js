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
            var sessions = [];
            jangleFit.user.sessions.each(
                function(session) {
                    console.log(session);
                    var d = new Date(session.get('timestamp')),
                    timestring = d.toISOString();
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
