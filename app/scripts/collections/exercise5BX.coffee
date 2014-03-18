define [
  'underscore'
  'backbone'
  'models/Exercise5bx-model'
], (_, Backbone, Exercise5bxModel) ->

  class Exercise5bxCollection extends Backbone.Collection
    model: Exercise5bxModel