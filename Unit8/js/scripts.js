const btnRed = document.querySelector("#redImage")
const btngreen = document.querySelector("#greenImage")
const pageBody = document.querySelector("body")

btnRed.addEventListener('click', () => pageBody.className = "paintRed")
btngreen.addEventListener('click', () => pageBody.className = "paintGreen")