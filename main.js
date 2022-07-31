//Variables
var bubbleParent = document.querySelector('body')
var starredIdeasButton = document.querySelector('.starredIdea')

var titleInput = document.getElementById('idea-title')
var bodyInput = document.getElementById('idea-body')
var saveButton = document.querySelector('.save-button')
var grid = document.querySelector('.grid')

var searchIdeaBox = document.querySelector('.align-search')


var currentTitle
var currentBody


//Arrays
var ideaCards = []

//Event listeners
// bubbleParent.addEventListener('click', clickHandler)
window.addEventListener('load', doNothing)
titleInput.addEventListener('input', checkInputs)
bodyInput.addEventListener('input', checkInputs)
saveButton.addEventListener('click', saveCard)
grid.addEventListener('click', favoriteThisCard)
grid.addEventListener('click', deleteThisCard)


//Event Handlers



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
    var starIcon = "./assets/star.svg"
    if(ideaCards[i].starred) {
      starIcon = "./assets/star-active.svg"
    }
    grid.innerHTML += `
    <div class="card-header">
      <img id="star-${ideaCards[i].id}" class="star" src=${starIcon}>
      <img id="delete-${ideaCards[i].id}" class="delete" src="./assets/delete.svg">
      <div class="card-content">
        <div class="card-title">${ideaCards[i].title}</div>
        <div class="card-body">${ideaCards[i].body}</div>
        <div class="card-footer">
          <img src="./assets/comment.svg"> Comment
        </div>
      </div>
    </div>`
  }
 }

function favoriteThisCard() {
  var favId = event.target.id
  for(var i = 0; i < ideaCards.length; i++) {
    if(favId === `star-${ideaCards[i].id}`) {
      if(ideaCards[i].starred) {
        // if we click on one that is starred, we want to change the starrred value to false and reset the icon state.
        ideaCards[i].starred = false;
        event.target.src = "./assets/star.svg"
      } else {
        ideaCards[i].starred = true;
        event.target.src = "./assets/star-active.svg"
      }
    }
  }
  showIdeaCards()
}

function deleteThisCard() {
  var deletedId = event.target.id
  for(var i = 0; i < ideaCards.length; i++) {
    if(deletedId === `delete-${ideaCards[i].id}`) {
      ideaCards.splice(i,1)
    }
  }
  showIdeaCards()
}
