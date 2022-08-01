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
  if (event.target.classList.contains('star')) { favoriteThisCard(event) }
  if (event.target.classList.contains('delete')) { deleteThisCard(event) }
}



//Functions
function checkInputs() {
  if (titleInput.value === '' || bodyInput.value === '') {
    doNothing()
  } else { enableButton() }
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
  for (var i = 0; i < ideaCards.length; i++) {
    grid.innerHTML += `<div class="card-header">
    <img class="star" src="./assets/star.svg">
    <img class="delete" src="./assets/delete.svg">
    <div class="card-content">
    <div class="card-title">${ideaCards[i].title}</div>
    <div class="card-body">${ideaCards[i].body}</div>
    <div class="card-footer"><img src="./assets/comment.svg"> Comment</div>
    </div>`
  }
  console.log(ideaCards)
}

function favoriteThisCard(event) {
  var id = event.target.id
  var newFavorite = event.target.closest('.card')
  for (var i = 0; i < ideaCards.length; i++) {
    if (ideaCards[i].id == id) {
      favCards.push(ideaCards[i])
      ideaCards.splice(i, 1)
    } else { return }
  }
  // favCards.push(newFavorite)
  showIdeaCards()
  console.log(favCards)
}

function deleteThisCard(event) {
  var deletedCard = event.target.closest('.card')
  for (var i = 0; i < ideaCards.length; i++) {
    ideaCards.splice(i, 1)
  }
  showIdeaCards()
  console.log(favCards)
}

