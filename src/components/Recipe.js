import React, {useContext} from 'react'
import IngredientList from './ingredientList'
import {RecipeContext} from './App'

/*Recipe function starts to give the layout of the recipe,
breaking up the recipe object. It then passes the
ingredients object to IngredientList component*/

/*export default can be at the top, or at the bottom*/
export default function Recipe(props) {

  /*Thanks to context we don't need to worry about deeply nested prop passing
  and we can just get the things we need from the context*/
  const { handleRecipeDelete, handleRecipeSelect } = useContext(RecipeContext)

/*Object destructuring to make it easier/cleaner to access variables*/
  const {
    id,
    name,
    cookTime,
    servings,
    instructions,
    ingredients,
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

    </div>
  )
}
/*
When we import the prop, we're able to use
object destructuring to catch everything we need using
the specific names of the properties in the object
*/
