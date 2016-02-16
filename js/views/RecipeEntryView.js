var RecipeEntryView = Backbone.View.extend({

  className: 'entry',

  template: _.template('<div><img src="<%= image %>""><br><%= title %></div>'),

  events: {

  },

  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
    this.render();
  },

  render: function() {

    var entry = this.template({
      title: this.model.get('title'),
      image: this.model.get('image')
    });

    this.$el.html(entry);

  },

});