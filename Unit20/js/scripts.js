import {recipes} from "../data/recipes.js"
//console.log(recipes)

//grab the HTML references
const myNav = document.querySelector('nav')
const myViewer = document.querySelector('#viewer')

//nav items
recipes.forEach(recipe => {
    console.log(recipe)
    const myButton = document.createElement('button')
    myButton.textContent = `${recipe.Dish}`
    myButton.addEventListener('click', showRecipe(recipe))
    myNav.appendChild(myButton)
})




function showRecipe(recipe) {
    console.log(recipe)


    let recipeSection = document.createElement("section")
    let recipeDish = document.createElement("h2")
    let recipePhoto = document.createElement("img")
    let recipeIngredients = document.createElement('ul')
    let recipeDirections = document.createElement('ul')


recipeDish.textContent = recipe.Dish
recipePhoto.src = `images/${recipe.photo}`
recipePhoto.alt = recipe.Dish
recipe.Ingredients.forEach(ingredient => {
    //console.log(ingredient)
    let theIngredient = document.createElement('li')
    theIngredient.textContent = ingredient
    recipeIngredients.appendChild(theIngredient)
})




myViewer.appendChild(recipeIngredients)
} // end of the function

