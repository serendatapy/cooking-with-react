import React from 'react'
import RecipeIngredientEdit from './RecipeIngredientEdit';

export default function RecipeEdit() {
  return (
    <div className="recipe-edit">
      <div>
        <button>&times;</button>
      </div>

      <div>

        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name"/>

        <label htmlFor="cookTime">Cook Time</label>
        <input type="text" name="cookTime" id="cookTime"/>

        <label htmlFor="servings">Servings</label>
        <input type="number" min="1" name="servings" id="servings"/>

        <label htmlFor="instructions">Instructions</label>
        <textarea name="instructions" id="instructions"></textarea>

      </div>
      <br/>
      <label>Ingredients</label>
      {/* This next div will take a grid CSS */}
      <div>
        <div>Name</div>
        <div>Amount</div>
        <div></div>
        <RecipeIngredientEdit />
        <RecipeIngredientEdit />
        {/* For the moment 2 just as place holders while we hook up functionality */}
      </div>
      <div>
        <button>Add Ingredient</button>
      </div>

    </div>
  )
}

/*
&times;
htmlFor to avoid conflicts with javascript
*/
