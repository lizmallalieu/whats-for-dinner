var ListView = Backbone.View.extend({

  id: 'list',

  initialize: function() {
    this.collection.on('add', this.render, this);
  },

  render: function() {

    this.$el.empty();

    this.entries = this.collection.models.map(function(model) {
      return new RecipeEntryView({
        model: model
      });
    });

    var $els = this.entries.map(function(entry) {
      return entry.$el;
    });

    this.$el.append($els);

    return this;

  }


});