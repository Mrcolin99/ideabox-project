//Variables

var starredIdeasButton = document.querySelector('.starredIdea')

var titleInput = document.getElementById('idea-title')
var bodyInput = document.getElementById('idea-body')
var saveButton = document.querySelector('.save-button')

var searchIdeaBox = document.querySelector('.align-search')



var currentTitle
var currentBody
//Arrays
var ideaCards = []


//Event listeners
saveButton.addEventListener('click', saveCard)
saveButton.addEventListener('click', clearInputs)




//Functions
function saveCard() {
 currentTitle = titleInput.value
 currentBody = bodyInput.value
 var newIdea = new Idea(currentTitle, currentBody)
 event.preventDefault()
 ideaCards.push(newIdea)
}

function clearInputs() {
  titleInput.value = ''
  bodyInput.value = ''
}
