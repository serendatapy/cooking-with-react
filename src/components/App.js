import React, { useState, useEffect } from 'react';
import RecipeList from './RecipeList';
import RecipeEdit from './RecipeEdit';
import '../css/app.css';
import { v4 as uuidv4 } from 'uuid';

export const RecipeContext = React.createContext()

const LOCAL_STORAGE_KEY = 'cookingWithReact.recipes';

function App() {

  const [recipes, setRecipes] = useState(sampleRecipes);
  const [selectedRecipeId,setSelectedRecipeId] = useState();

  /*This will be similar to displaying selected recipes, but multiple*/
  const [searchedRecipes,setSearchedRecipe] = useState();

  /*On edit btn click,recipe is found out by id & passed to RecipeEdit*/
  const selectedRecipe = recipes.find(recipe => recipe.id === selectedRecipeId);

  /*When input is entered, filter out recipes, return array of matching term*/
  //const searchedRecipes = recipes.filter(/*recipe => recipe.name contains searchRecipeTerm*/);

  /*GETS recipes from local storage if it's not empty,
  just once([]) on load*/
  useEffect(()=>{
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    if(recipeJSON != null) setRecipes(JSON.parse(recipeJSON))
  }, [])

  /*SETS the information to local storage whenever recipe changes*/
  useEffect(()=> {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes))
  }, [recipes])

  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete,
    handleRecipeSelect,
    handleRecipeChange,
    recipeSearch
  }

  /*-----------------FUNCTIONS-------------------*/
  function handleRecipeSelect (id){
    setSelectedRecipeId(id)
  }

  function handleRecipeAdd(){
    const newRecipe = {
      id: uuidv4(),
      name: '',
      servings: '',
      cookTime: '',
      instructions: '',
      ingredients: [{
          id: uuidv4(),
          name: '',
          amount: ''}
        ]
    }
    setSelectedRecipeId(newRecipe.id)
    setRecipes([...recipes, newRecipe])
    /*Set the new state to re-render
    takes recipes array(...)opens it and adds newRecipe to the end*/
  }

  function handleRecipeChange(id, recipe) {
    const newRecipe = [...recipes]
    const index = newRecipe.findIndex(r => r.id === id)
    newRecipe[index] = recipe /*swap out old recipe for new recipe*/
    setRecipes(newRecipe) /*change the state*/
  }

  function handleRecipeDelete(id){
    if(selectedRecipeId !=null && selectedRecipeId === id){
      setSelectedRecipeId(undefined)
    }
    setRecipes(recipes.filter(recipe => recipe.id !== id)) //return all recipes minus one with selected id
  }

  function recipeSearch(str){
    let searchResult;
    setSelectedRecipeId(undefined) //remove edit if searching

    if(str !== undefined && str.trim() !== ""){
      const regX = new RegExp(str,'i');
      searchResult = recipes.filter(
        recipe => recipe.name.search(regX) !== -1)
      setSearchedRecipe(searchResult)
    }
    else setSearchedRecipe(undefined)
  }


/*-------------------RENDERING---------------------*/
  return (
    <RecipeContext.Provider value= {recipeContextValue}>
      {searchedRecipes ? <RecipeList recipes = {searchedRecipes}/>:<RecipeList recipes = {recipes}/>}
      {selectedRecipe && <RecipeEdit recipe={selectedRecipe}/>}
    </RecipeContext.Provider>
  )
}
//add conditional statement
/* {searchedRecipes ?
<RecipeList recipe={searchedRecipes}/> :
 <RecipeList recipe={recipes}/>}
 <RecipeList recipes = {recipes}/>*/

/*Placeholder default data*/
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
    ],
    authors: [
      {
        id: 1,
        name: 'Alejandro'
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
    ],
    authors: [
      {
        id: 2,
        name: 'Xing'
      },
      {
        id: 3,
        name: 'Ping'
      }
    ]
  }
]

export default App;