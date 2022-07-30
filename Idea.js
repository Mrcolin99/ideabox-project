class Idea {
    constructor(title, body) {
        this.title = title
        this.body = body
        this.starred = false
        this.id = Date.now()
    }

    favoriteThis() {
        this.starred === true
    }

    saveToStorage() {

    }

    deleteFromStorage() {

    }

    updateIdea() {

    }
}
