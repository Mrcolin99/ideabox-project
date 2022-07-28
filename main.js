//Variables
var starredIdeasButton = document.querySelector('.starredIdea')

var titleInput = document.getElementById('idea-title')
var bodyInput = document.getElementById('idea-body')
var saveButton = document.querySelector('.save-button')
var grid = document.querySelector('.card')

var searchIdeaBox = document.querySelector('.align-search')

var currentTitle
var currentBody

titleInput.innerText = titleInput.value
//Arrays
var ideaCards = []


//Event listeners
saveButton.addEventListener('click', checkInputs)
saveButton.addEventListener('click', clearInputs)

//Functions
function checkInputs() {
  if (titleInput.value === '') {return} else if (bodyInput.value === '') {return} else {saveCard()}
  event.preventDefault()
}

function saveCard() {
 currentTitle = titleInput.value
 currentBody = bodyInput.value
 var newIdea = new Idea(currentTitle, currentBody)
 event.preventDefault()
 ideaCards.push(newIdea)
 console.log(newIdea)
 showIdeaCards()
}

function clearInputs() {
  titleInput.value = ''
  bodyInput.value = ''
  event.preventDefault()
}

function showIdeaCards() {
  grid.innerHTML = ''
  for(var i = 0; i < ideaCards.length; i++) {
    grid.innerHTML += `<div class="card-header">
      <svg class="star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.06 15.65"><defs><style>.cls-1{fill:#fff;}</style></defs><title>Artboard 29</title><g id="background"><polygon class="cls-1" points="8.02 2.48 9.64 5.77 13.27 6.29 10.64 8.85 11.26 12.47 8.02 10.76 4.77 12.47 5.39 8.85 2.76 6.29 6.39 5.77 8.02 2.48"/></g></svg>
      <svg class="delete" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.18 17.72"><defs><style>.cls-1{fill:#fff;}</style></defs><title>Artboard 31</title><g id="background"><polygon class="cls-1" points="13.13 5.87 12.43 5.16 8.97 8.61 5.53 5.16 4.82 5.87 8.27 9.32 4.82 12.77 5.53 13.48 8.97 10.03 12.43 13.48 13.13 12.77 9.68 9.32 13.13 5.87"/></g></svg></div>
  <div class="card-title">${ideaCards[i].title}</div>
  <div class="card-body">${ideaCards[i].body}</div>
  <div class="card-footer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.71 19.71"><defs><style>.cls-1{fill:#fff;stroke:#353567;stroke-miterlimit:10;}.cls-2{fill:#353567;}</style></defs><title>abacus-v1Artboard 41</title><g id="background"><circle class="cls-1" cx="9.76" cy="9.76" r="5.58"/><polygon class="cls-2" points="5.65 9.37 5.65 10.14 9.37 10.14 9.37 13.86 10.14 13.86 10.14 10.14 13.86 10.14 13.86 9.37 10.14 9.37 10.14 5.65 9.37 5.65 9.37 9.37 5.65 9.37"/></g></svg> Comment</div>`
  }
}