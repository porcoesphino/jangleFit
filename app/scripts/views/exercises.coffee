define [
  'jquery'
  'underscore'
  'backbone'
  'templates'
], ($, _, Backbone, JST) ->
  class ExercisesView extends Backbone.View
    template: JST['app/scripts/templates/exercises.ejs']