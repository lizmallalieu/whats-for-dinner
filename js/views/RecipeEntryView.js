var RecipeEntryView = Backbone.View.extend({

  className: 'entry',

  template: _.template('<p>Recipe Name: ' + recipeName + '</p>'),

  events: {
    'click': 'clickAction'
  },

  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
    this.render();
  },

  render: function() {

    var entry = this.template({
      recipeName: this.model.get('title')
    });

    this.$el.html(entry);

  },

  clickAction: function() {
    this.model.toggleUnit();
  }

});