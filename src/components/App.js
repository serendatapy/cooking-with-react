import React, { useState } from 'react';
import RecipeList from './RecipeList'
import '../css/app.css';
import { v4 as uuidv4 } from 'uuid';
/*
The use of Context is aimed specically at tackling the 'prop drilling' through
many levels of component hierachy, since those components don't need the props.

All the css files are connected to this one through imports (react style)
so there is only need to import this one

App.js imports RecipeList and then returns it after passing it default state (to be rendered by index.js)

tip: using handle infront of button functions as a reminder that the function
handles on click events on the buttons.
*/

/*To avoid passing down useless props, we can use Context*/
export const RecipeContext = React.createContext()

function App() {
  /*Create a state with a method to update - set default to sample*/
  const [recipes, setRecipes] = useState (sampleRecipes)

  /*we create an object containing what we want
   to make available through our context
   (this object uses shorthand notation)*/
   const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete
  }

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
    setRecipes([...recipes, newRecipe]) //previous state + recipe to add
  }

  function handleRecipeDelete(id){
    /*Set the new state to re-render*/
    setRecipes(recipes.filter(recipe => recipe.id !== id)) //return all recipes minus one with selected id
  }

  /*Finally we pass our object to the context, and wrap
  our component in it, in this way, that component and all children
  could, if needed, have access to it. This allows us to avoid prop drilling, and to
  access the props we need, only where needed*/

  return (
    <RecipeContext.Provider value= {recipeContextValue}>
      <RecipeList recipes = {recipes}/>
    </RecipeContext.Provider>

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