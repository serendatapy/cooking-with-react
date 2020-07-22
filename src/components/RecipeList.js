import React from 'react'
import Recipe from './Recipe'

function RecipeList(props) {
  /*we take in the props object and break it up
  to more accessible variables*/
  const {
    recipes,
    handleRecipeAdd,
    handleRecipeDelete,
   } = props;

  return (
    <div className="recipe-list">
      <div>
        {
          recipes.map(
            recipe => {
              /*the delete function is passed to recipe*/
              return (
                <Recipe
                  key={recipe.id}
                  handleRecipeDelete= {handleRecipeDelete}
                  {...recipe}
                />
                )
            }
          )
        }
      </div>

      <div className="recipe-list__add-recipe-btn-container">
        <button
        className="btn btn--primary"
        onClick={handleRecipeAdd}
        >
          Add a recipe
        </button>
      </div>
    </div>
  )
}

export default RecipeList;

/*
RecipeList takes the recipes array passed from app.js,
destructures it and passes each recipe to the Recipe.js component.

then returns individual Recipe components.

Using the Spread operator passes all the values individually

The recipes.map what it does is;
1.for every recipe, break up the object and put it in JSX format
for later rendering.

Every time you use an array you need to add a key.
With the keys, react knows what to re-render specifically,
rather than re-render all the components at once.
*/