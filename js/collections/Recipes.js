var Recipes = Backbone.Collection.extend({

  model: RecipeEntry,

  addRecipeEntries: function(ingredients) {

    // modify ingredients string for URL
    ingredients = ingredients.split(', ').join('%2');

    $.get('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?ingredients=' + ingredients + '&limitLicense=false&number=5&ranking=1', function(data) {

        this.add({
          id: data.id,
          title: data.title,
          image: data.image
        });

      }).bind(this);

  }

});