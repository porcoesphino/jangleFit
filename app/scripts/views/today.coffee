define [
  'jquery'
  'underscore'
  'backbone'
  'templates'
], ($, _, Backbone, JST) ->
  class TodayView extends Backbone.View
    template: JST['app/scripts/templates/today.ejs']