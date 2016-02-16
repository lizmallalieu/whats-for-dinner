var RecipeEntry = Backbone.Model.extend({

  defaults: {
    id: 0,
    title: 'recipe',
    image: undefined,
    // sourceUrl: comes from GET recipe information route
  },

  grabSource: function(recipeId) {
    $.ajax({
      url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/' + recipeId + '/information',
      type: 'GET',
      contentType: 'application/json',

      success: function(result) {

        var win = window.open(result.sourceUrl, '_blank');
        win.focus();

      }.bind(this)
    });
  }

});