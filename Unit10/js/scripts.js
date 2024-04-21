import {allSenators} from '../data/senators.js'
console.log(allSenators);

//tag the HTML elements
const  myNavigation = document.querySelector('nav');
const  myParent = document.querySelector('#allCards');

// create an all people button
const btnAll = document.createElement('button')
btnAll.textContent = "All People"
btnAll.addEventListener('click', () => displayPeople(allSenators));

//event listener and filter for the women
const btnFemale = document.createElement('button');
btnFemale.textContent = 'Women'
btnFemale.addEventListener('click', () => {
    const femaleSenators = allSenators.filter (person => person.gender === 'female')
    displayPeople(femaleSenators)})


//event listener and filter for the men
 const btnMale = document.createElement('button');
    btnMale.textContent = 'Men'
    btnMale.addEventListener('click', () => {
        const maleSenators = allSenators.filter (person => person.gender === 'male')
        displayPeople(maleSenators)})


//event listener and filter for the republican
const btnRepublican = document.createElement('button');
btnRepublican.textContent = 'Republican'
btnRepublican.addEventListener('click', () => {
    const republicanSenators = allSenators.filter (person => person.party === 'republican')
    displayPeople(republicanSenators)})


//event listener and filter for the democrat
const btnDemocrat = document.createElement('button');
btnDemocrat.textContent = 'Democrat'
btnDemocrat.addEventListener('click', () => {
    const democratSenators = allSenators.filter (person=> person.party === 'democrat')
    displayPeople(democratSenators)})


// add buttons to page
myNavigation.appendChild(btnAll)
myNavigation.appendChild(btnFemale)
myNavigation.appendChild(btnMale)
myNavigation.appendChild(btnRepublican)
myNavigation.appendChild(btnDemocrat)


// loop through all the people
function displayPeople (x) {
    x.forEach(person => {
        const myFigure = document.createElement('figure')

        const myImage = document.createElement('img')

        const myCaption = document.createElement('figcaption')

//assemble the parts
myFigure.appendChild(myImage)




    }// end of fat arrow

    )//end of loop


} //end of function

//casll function
displayPeople(allSenators);