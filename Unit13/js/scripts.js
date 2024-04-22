import {novels} from "../data/novels.js"
console.log(novels)

//grab the HTML references
const myNav = document.querySelector('nav')
const myViewer = document.querySelector('#viewer')

//nav items
novels.forEach(novel => {
    console.log(novel)
    const myBtn = document.createElement('button')
    myBtn.textContent = novel.Title

    myNav.appendChild(myBtn)
})