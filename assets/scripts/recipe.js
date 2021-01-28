window.onload = () => {
  const idUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${localStorage.getItem(
    'recipe'
  )}`;

  let recipeData = {};

  fetch(idUrl)
    .then(response => response.json())
    .then(recipe => {
      recipeData = recipe.meals[0];
    });
};
