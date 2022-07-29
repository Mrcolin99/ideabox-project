//Variables
var bubbleParent = document.querySelector('body')
var starredIdeasButton = document.querySelector('.starredIdea')

var titleInput = document.getElementById('idea-title')
var bodyInput = document.getElementById('idea-body')
var saveButton = document.querySelector('.save-button')
var grid = document.querySelector('.card')

var searchIdeaBox = document.querySelector('.align-search')


var currentTitle
var currentBody


//Arrays
var ideaCards = []
var favCards = []

//Event listeners
bubbleParent.addEventListener('click', clickHandler)
window.addEventListener('load', doNothing)
titleInput.addEventListener('input', checkInputs)
bodyInput.addEventListener('input', checkInputs)
saveButton.addEventListener('click', saveCard)

//Event Handlers
function clickHandler(event) {
  if (event.target.classList.contains('star')) {favoriteThisCard()}
  if (event.target.classList.contains('delete')) {deleteThisCard()}
}



//Functions
function checkInputs() {
  if (titleInput.value === '' || bodyInput.value === '') {
    doNothing()
  } else {enableButton()}
}

function doNothing() {
  saveButton.disabled = true
}

function enableButton() {
  saveButton.disabled = false
}

function saveCard() {
 currentTitle = titleInput.value
 currentBody = bodyInput.value
 var newIdea = new Idea(currentTitle, currentBody)
 event.preventDefault()
 ideaCards.push(newIdea)
 showIdeaCards()
 clearInputs()
 checkInputs()
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
    <img class="star" src="./assets/star.svg" viewBox="0 0 16.06 15.65"><defs><style>.cls-1{fill:#fff;}</style></defs><title>Artboard 29</title><g id="background"><polygon class="cls-1" points="8.02 2.48 9.64 5.77 13.27 6.29 10.64 8.85 11.26 12.47 8.02 10.76 4.77 12.47 5.39 8.85 2.76 6.29 6.39 5.77 8.02 2.48"/></g></svg>
    <img class="delete" src="./assets/delete.svg" viewBox="0 0 18.18 17.72"><defs><style>.cls-1{fill:#fff;}</style></defs><title>Artboard 31</title><g id="background"><polygon class="cls-1" points="13.13 5.87 12.43 5.16 8.97 8.61 5.53 5.16 4.82 5.87 8.27 9.32 4.82 12.77 5.53 13.48 8.97 10.03 12.43 13.48 13.13 12.77 9.68 9.32 13.13 5.87"/></g></svg></div>
 <div class="card-title">${ideaCards[i].title}</div>
 <div class="card-body">${ideaCards[i].body}</div>
 <div class="card-footer"><img src="./assets/comment.svg" viewBox="0 0 19.71 19.71"><defs><style>.cls-1{fill:#fff;stroke:#353567;stroke-miterlimit:10;}.cls-2{fill:#353567;}</style></defs><title>abacus-v1Artboard 41</title><g id="background"><circle class="cls-1" cx="9.76" cy="9.76" r="5.58"/><polygon class="cls-2" points="5.65 9.37 5.65 10.14 9.37 10.14 9.37 13.86 10.14 13.86 10.14 10.14 13.86 10.14 13.86 9.37 10.14 9.37 10.14 5.65 9.37 5.65 9.37 9.37 5.65 9.37"/></g></svg> Comment</div>`
  }
 }

function favoriteThisCard() {
  var newFavorite = event.target.closest('.card')
  for(var i = 0; i < ideaCards.length; i++) {
    if (favCards.includes(newFavorite.id)) {
      return
    } else {favCards.push(ideaCards[i])}
  }
  showIdeaCards()
  console.log(favCards)
}

function deleteThisCard() {
  var deletedCard = event.target.closest('.card')
  for(var i = 0; i < ideaCards.length; i++) {
    ideaCards.splice(i,1)
  }
  showIdeaCards()
  console.log(favCards)
}