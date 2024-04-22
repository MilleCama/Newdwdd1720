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
    myBtn.addEventListener('click', () => showNovel(novel))
    myNav.appendChild(myBtn)
})


function showNovel(novel) {
    console.log(novel)

    let novelSection = document.createElement("section")
    let novelTitle = document.createElement("h2")
    let novelAuthor = document.createElement("p")
    let novelCategory = document.createElement('p')
    let novelChapters = document.createElement('p')
    let novelDescription = document.createElement('p')
    let novelPhoto = document.createElement("img")
    let novelTags = document.createElement('ul')

    novelTitle.textContent = novel.Title
    novelPhoto.src =    `images/${novel.Photo}`
    novelPhoto.alt =  novel.Title
    novelAuthor.textContent = `Author: ${novel.Author}`
    novelCategory.textContent = `Category: ${novel.Category}`
    novelChapters.textContent = `Chapters: ${novel.Chapters}`
    novelDescription.textContent = novel.Description
  
    
    novel.Tags.forEach(tag => {
        //console.log(tag)
        let theTag = document.createElement('li')
        theTag.textContent = tag
        novelTags.appendChild(theTag)
        
    })

    //assemble the cards

    novelSection.appendChild(novelTitle)
    novelSection.appendChild(novelPhoto)
    novelSection.appendChild(novelAuthor)
    novelSection.appendChild(novelCategory)
    novelSection.appendChild(novelChapters)
    novelSection.appendChild(novelDescription)
    novelSection.appendChild(novelTags)
   


myViewer.textContent = ""
myViewer.appendChild(novelSection)
}
// end of the function