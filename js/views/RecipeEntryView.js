var RecipeEntryView = Backbone.View.extend({

  className: 'entry',

  template: _.template('<div><img src="<%= image %>""><br><%= title %><br><a class="<%= id %>">See More</a></div>'),

  events: {
    'click': 'clickForMore'
  },

  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
    this.render();
  },

  render: function() {

    var entry = this.template({
      title: this.model.get('title'),
      image: this.model.get('image'),
      id: this.model.get('id')
    });

    this.$el.html(entry);

  },

  clickForMore: function(e) {
    this.model.grabSource(this.model.get('id'));
  }

});