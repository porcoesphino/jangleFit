/*global jangleFit, Backbone*/

jangleFit.Models = jangleFit.Models || {};

(function () {
    'use strict';

    jangleFit.Models.User = Backbone.Model.extend({

        id: 'user',

        defaults: {
            progress: [
                {
                    title: '5BX',
                    ladder: 'Chart 4',
                    rung: 'D-'
                }, {
                    title: 'Hackers',
                    ladder: 'Lifetime Ladder',
                    rung: '16'
                }
            ]
        },

        addProgress: function(progress) {
            // TODO: This should handle updates from the server
            // Although, that isn't a realistic usecase
            if (!this.collection) {
                this.collection = new jangleFit.Collections.ProgressCollection();
                this.collection.add(progress);
            }
        },

        parse: function(response) {
            var progressList = response.progress || this.get('progress');
            this.unset('progress', {silent: true});
            delete response.progress;
            this.addProgress(progressList);
            return response;
        },

        toJSON: function() {
            var result = Backbone.Model.prototype.toJSON.call(this);
            result.progress = this.collection.models.map( function(item) {return item.toJSON();});
            return result;
        },

        toViewJSON: function() {
            var result = Backbone.Model.prototype.toJSON.call(this);
            result.progress = this.collection.models.map( function(item) {return item.toViewJSON();});
            return result;
        },

        initialize: function() {
            this.localStorage = new Backbone.LocalStorage('janglefit');
            this.fetch();

            this.on('change', this.localSave, this);
        },

        // TODO: remove this hideousness
        // For some reason calling save directly as an
        // event handler doesn't work
        localSave: function() {
            this.save();
        },

        isInitialised: function() {
            return this.get('givenName') && this.get('familyName');
        },

        getProgress: function(title) {
            return this.collection.get(title);
        },

        getHistory: function() {
            if (!this.sessions){
                this.sessions = new jangleFit.Collections.SessionCollection();
                this.sessions.fetchAll();
            }
            return this.sessions;
        }

    });

})();
