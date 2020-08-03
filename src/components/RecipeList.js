import React, {useContext} from 'react'
import Recipe from './Recipe'
import {RecipeContext} from './App'

/*pass in 'recipes' from 'App'*/
function RecipeList({recipes}) {
  const { handleRecipeAdd,recipeSearch } = useContext(RecipeContext)

  return (

    <div className="recipe-list">

      <label
          htmlFor="search-recipe"
          className="recipe-edit__label">
            Search Recipe
      </label>
      <input
        type="text"
        name="search-recipe"
        id="search-recipe"
        placeholder="name of the recipe you want"
        // value= {recipe.servings}
        onChange={e => recipeSearch(e.target.value)}
        className="recipe-edit__input"
      />

      <div>
        {
      /*(...)passes recipe as individual properties instead of in an obj*/
          recipes.map(
            recipe => {
              return (
                <Recipe key={recipe.id} {...recipe}/>
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