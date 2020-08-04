import React, {useContext} from 'react'
import IngredientList from './ingredientList'
import AuthorList from './AuthorList'
import {RecipeContext} from './App'

/*export default can be at the top, or at the bottom*/
export default function Recipe(props) {

const { handleRecipeDelete, handleRecipeSelect } = useContext(RecipeContext)

/*Object destructuring props from recipe list to make it
easier/cleaner to access variables*/
  const {
    id,
    name,
    cookTime,
    servings,
    instructions,
    ingredients,
    authors,
  } = props;

  return (
    <div className="recipe">

      <div className="recipe__header">
        <h3 className="recipe__title">{name}</h3>
        <div>
          <button
          className="btn btn--primary mr-1"
          onClick={()=> handleRecipeSelect(id)}
          >
            Edit
          </button>

          <button
          className="btn btn--danger"
          onClick= {()=> handleRecipeDelete(id)}
          >
            Delete
          </button>

        </div>
      </div>

      <div className="recipe__row">
        <span className="recipe__label">Cook Time:</span>
        <span className="recipe__value">{cookTime}</span>
      </div>

      <div className="recipe__row">
        <span className="recipe__label">Servings:</span>
        <span className="recipe__value">{servings}</span>
      </div>

      <div className="recipe__row">
        <span className="recipe__label">Instructions:</span>
        <div className="recipe__value recipe__instructions recipe__value--indented">
          {instructions}
        </div>
      </div>

      <div className="recipe__row">
        <span className="recipe__label">Ingredients:</span>
        <div className="recipe__value recipe__value--indented">
          <IngredientList ingredients = {ingredients}/>
        </div>
      </div>

      <div className="recipe__row">
        <span className="recipe__label">Authors:</span>
        <div className="recipe__value recipe__value--indented">
          <AuthorList authors = {authors}/>
        </div>
      </div>

    </div>
  )
}
