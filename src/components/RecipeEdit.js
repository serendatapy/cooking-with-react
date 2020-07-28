import React from 'react'
import RecipeIngredientEdit from './RecipeIngredientEdit';

export default function RecipeEdit({recipe}) {
  return (
    <div className="recipe-edit">
      <div className="recipe-edit__remove-button-container">
        <button className="btn recipe-edit__remove-button">&times;</button>
      </div>

      <div className="recipe-edit__details-grid">

        <label htmlFor="name"
        className="recipe-edit__label">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={recipe.name} /*this needs on change, otherwise it's ineditable*/
          className="recipe-edit__input"
        />

        <label
        htmlFor="cookTime"
        className="recipe-edit__label">
          Cook Time
        </label>
        <input
          type="text"
          name="cookTime"
          id="cookTime"
          value={recipe.cookTime}
          className="recipe-edit__input"
        />

        <label
          htmlFor="servings"
          className="recipe-edit__label">
            Servings
        </label>
        <input
          type="text"
          min="1"
          name="servings"
          id="servings"
          value= {recipe.servings}
          className="recipe-edit__input"/>

        <label
        htmlFor="instructions"
        className="recipe-edit__label">
        Instructions
        </label>
        <textarea
        name="instructions"
        className="recipe-edit__input"
        id="instructions">
        {recipe.instructions}
        </textarea>

      </div>
      <br/>
      <label className="recipe-edit__label">Ingredients</label>
      {/* This next div will take a grid CSS */}
      <div className="recipe-edit__ingredient-grid">
        <div>Name</div>
        <div>Amount</div>
        <div></div>
        {recipe.ingredients.map(ingredient => (
          <RecipeIngredientEdit
          key={ingredient.id}
          ingredient={ingredient}
          />
        ))}
        {/* For the moment 2 just as place holders while we hook up functionality */}
      </div>
      <div className="recipe-edit__add-ingredient-btn-container">
        <button className="btn btn--primary">Add Ingredient</button>
      </div>

    </div>
  )
}

/*
&times;
htmlFor to avoid conflicts with javascript

Updating Values Notes: The value of a form field gets its value from the state,
not from user input. User input updates the state which is then used
by React to update the value of the form field. The form always reflects
the current state values when form fields have values set to the state values.
*/
