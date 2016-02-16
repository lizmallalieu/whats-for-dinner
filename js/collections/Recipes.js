var Recipes = Backbone.Collection.extend({

  model: RecipeEntry,

  addRecipeEntries: function(ingredients) {

    // modify ingredients string for URL
    ingredients = ingredients.split(', ').join('%2');

    // unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?ingredients=apples%2Cflour%2Csugar&limitLicense=false&number=5&ranking=1")
    //   .header("X-Mashape-Key", "1HhAsRQSxEmshtBePuN3TCMiCSEbp1bI02ejsnnqKhab7HIYol")
    //   .header("Accept", "application/json")
    //   .end(function (result) {
    //     console.log(result.status, result.headers, result.body);
    //   });

  // d9SHGoOd4wmshG1QDbu8Jgzh7PI9p11t5d1jsnCXoowqZDDKHu

    $.ajax({

      url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?ingredients=' + ingredients + '&limitLicense=false&number=5&ranking=1',
      type: 'GET',
      contentType: 'application/json',
      success: function(data) {
        this.add({
          id: data.id,
          title: data.title,
          image: data.image
        });

      }

      });

  }

});