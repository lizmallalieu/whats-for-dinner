var InputView = Backbone.View.extend({

  el: '<input>',

  events: {
    'keydown': 'keyAction'
  },

  initialize: function() {
    this.resetInput();
    return this;
  },

  keyAction: function(e) {

    var isEnterKey = (e.which === 13);

    if(isEnterKey) {
      this.collection.addRecipeEntries(this.$el.val());
      this.resetInput();
    }

  },

  resetInput: function() {
    this.$el.attr({
      placeholder: 'Enter ingredients...'
    });
    this.clearInput();
  },

  clearInput: function() {
    this.$el.val('');
  }


});