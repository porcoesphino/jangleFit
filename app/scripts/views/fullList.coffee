define [
  'jquery'
  'underscore'
  'backbone'
  'templates'
], ($, _, Backbone, JST) ->
  class FulllistView extends Backbone.View
    template: JST['app/scripts/templates/fullList.ejs']