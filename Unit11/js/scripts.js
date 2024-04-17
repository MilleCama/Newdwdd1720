//add links to the html
const myNavigation = document.querySelector('nav')
const myViewer = document.querySelector('main')



//go grab the data and then WAIT for the result.
fetch("../data/starships (2).json")
    .then((response) => response.json ())
    .then((shipArray) => {
        console.log(shipArray)
        populateNav(shipArray)
    })


   //populate the nav bar
   function populateNav(allShips) {
    console.log(allShips)
    allShips.forEach(ship => {
        let myButton = document.createElement('button')
        console.log(ship.name)
        
    })//end of loop

   } //end of nav populate




   