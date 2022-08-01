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
titleInput.addEventListener('keyup', checkInputs)
bodyInput.addEventListener('keyup', checkInputs)
saveButton.addEventListener('click', saveCard)
grid.addEventListener('click', favoriteThisCard)
grid.addEventListener('click', deleteThisCard)

//Functions
function checkInputs() {
  if (titleInput.value === '' || bodyInput.value === '') {
    saveButton.disabled = true;
    saveButton.classList.add("disabled-button")
  } else {
    saveButton.disabled = false
    saveButton.classList.remove("disabled-button")
  }
}

function saveCard() {
 currentTitle = titleInput.value
 currentBody = bodyInput.value
 var newIdea = new Idea(currentTitle, currentBody)
 ideaCards.push(newIdea)
 showIdeaCards()
 clearInputs()
 checkInputs()
}

function clearInputs() {
  titleInput.value = ''
  bodyInput.value = ''
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
      <img id="star-${ideaCards[i].id}" class="star" src=${starIcon} alt="Star button">
      <img id="delete-${ideaCards[i].id}" class="delete" src="./assets/delete.svg" alt="X button">
      <div class="card-content">
        <div class="card-title">${ideaCards[i].title}</div>
        <div class="card-body">${ideaCards[i].body}</div>
        <div class="card-footer">
          <img src="./assets/comment.svg" alt"Plus button"> Comment
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
