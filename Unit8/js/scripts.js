const btnList = document.querySelector("#listImage")
const btnGrid = document.querySelector("#gridImage")
const pageBody = document.querySelector("body")

btnList.addEventListener('click', () => pageBody.className = "makeList")
btnGrid.addEventListener('click', () => pageBody.className = "makeGrid")







const pathStart = "//starwars-visualguide.com/#/films/"