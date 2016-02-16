var Recipes = Backbone.Collection.extend({

  model: RecipeEntry,

  addRecipeEntries: function(ingredients) {

    // modify ingredients string for URL
    ingredients = ingredients.split(', ').join('%2');

    $.ajax({

      url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?ingredients=' + ingredients + '&limitLicense=false&number=10&ranking=1',
      type: 'GET',
      contentType: 'application/json',
      success: function(data) {

        for(var i = 0; i < data.length; i++) {
          data[i] = {
            id: data[i].id,
            title: data[i].title,
            image: data[i].image
          }
        }

        this.reset(data);
      
      }.bind(this)


    });

  }
});