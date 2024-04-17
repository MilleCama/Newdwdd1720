const btnGrid = document.querySelector("#gridImage")
const btnList = document.querySelector("#listImage")

const pageBody = document.querySelector("body")

btnGrid.addEventListener('click', () => pageBody.className = "makeGrid")
btnList.addEventListener('click', () => pageBody.className = "makeList")







