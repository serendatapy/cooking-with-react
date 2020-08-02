import React, {useContext} from 'react'
import Recipe from './Recipe'
import {RecipeContext} from './App'

/*pass in 'recipes' from 'App'*/
function RecipeList({recipes}) {
  const { handleRecipeAdd } = useContext(RecipeContext)

  return (
    <div className="recipe-list">
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