import React from 'react'
import IngredientList from './ingredientList'

/*Recipe function starts to give the layout of the recipe,
breaking up the recipe object. It then passes the
ingredients object to IngredientList component*/

/*export default can be at the top, or at the bottom*/
export default function Recipe(props) {

  /*Object destructuring to make it easier to access variables*/
  const {
    name,
    cookTime,
    servings,
    instructions,
    ingredients
  } = props;

  return (
    <div className="recipe">

      <div className="recipe__header">
        <h3 className="recipe__title">{name}</h3>
        <div>
          <button className="btn btn--primary mr-1">Edit</button>
          <button className="btn btn--danger">Delete</button>
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
