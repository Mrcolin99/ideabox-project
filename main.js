//Variables

var starredIdeasButton = document.querySelector('.starredIdea')

var titleInput = document.getElementById('idea-title')
var bodyInput = document.getElementById('idea-body')
var saveButton = document.querySelector('save-button')

var searchIdeaBox = document.querySelector('align-search')



var newIdea
//Arrays

var ideaCards = []



//Event listeners
saveButton.addEventListener('click', saveCard)




//Functions
function saveCard() {
  var newIdea = new Idea(titleInput, bodyInput)
  
  event.preventDefault()
}
