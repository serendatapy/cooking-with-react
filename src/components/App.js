import React, { useState } from 'react';
import RecipeList from './RecipeList'
import '../css/app.css';
import { v4 as uuidv4 } from 'uuid';
/*
All the css files are connected to this one through imports (react style)
so there is only need to import this one

App.js imports RecipeList and then returns it after passing it props (to be rendered by index.js)

tip: using handle
*/

function App() {
  /*Create a state with a method to update - set default to sample*/
  const [recipes, setRecipes] = useState (sampleRecipes)

  /*2 functions to ADD and DELETE recipes*/
  function handleRecipeAdd(){
    const newRecipe = {
      //id: Date.now().toString()
      id: uuidv4(),
      name: 'New',
      servings: '1',
      cookTime: '1:00',
      instructions: 'Instr.',
      ingredients: [{
          id: uuidv4(),
          name: 'Name',
          amount: '1 Tbs'}
        ]
    }
    /*Set the new state to re-render*/
    setRecipes([...recipes, newRecipe])
  }

  function handleRecipeDelete(id){
    /*Set the new state to re-render*/
    setRecipes(recipes.filter(recipe => recipe.id !== id))
  }

  /*Due to the fact that these functions are NOT INSIDE
  the component we want to modify(because they need access to data)
  We need to pass these functions to the child components
  as below.*/

  return (
    <RecipeList
      recipes = {recipes}
      handleRecipeAdd = {handleRecipeAdd}
      handleRecipeDelete ={handleRecipeDelete}
    />
  )
}


/*the information about the recipes, which it
passes to the recipeList component.
An Array of Recipe objects*/

const sampleRecipes = [
  {
    id: 1,
    name: 'Plain Chicken',
    servings: 3,
    cookTime: '1:45',
    instructions: '1. Put Salt on Chicken\n2. Put Chicken in Oven\n3. Eat Chicken',
    ingredients: [
      {
        id: 1,
        name: 'Chicken',
        amount: '2 pounds'
      },
      {
        id: 2,
        name: 'Salt',
        amount: '1 Tbs'
      }
    ]
  },
  {
    id: 2,
    name: 'Plain Pork',
    servings: 5,
    cookTime: '0:45',
    instructions: '1. Put Paprika on pork\n2. Put Pork in Oven\n3. Eat Pork',
    ingredients: [
      {
        id: 1,
        name: 'Pork',
        amount: '3 pounds'
      },
      {
        id: 2,
        name: 'Paprika',
        amount: '2 Tbs'
      }
    ]
  }
]

export default App; /*app makes itself importable*/