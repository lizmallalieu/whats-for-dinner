var Recipes = Backbone.Collection.extend({

  model: RecipeEntry,

  addRecipeEntries: function(ingredients) {

    // modify ingredients string for URL
    ingredients = ingredients.split(', ').join('%2');

      // function first() {
      //    return $.ajax(...);
      // }

      // function second(data, textStatus, jqXHR) {
      //    return $.ajax(...);
      // }

      // function third(data, textStatus, jqXHR) {
      //    return $.ajax(...);
      // }

      // function main() {
      //     first().then(second).then(third);
      // }


    $.ajax({

      url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?ingredients=' + ingredients + '&limitLicense=false&number=2&ranking=1',
      type: 'GET',
      contentType: 'application/json',


      success: function(data) {

        var recipeObj = [];
        
        for(var i = 0; i < data.length; i++) {
          recipeObj[i] = {
            id: data[i].id,
            title: data[i].title,
            image: data[i].image,
          }
        }

        this.reset();
        console.log(recipeObj);
        this.add(recipeObj);
        
      }.bind(this)


    });
          
  }
});