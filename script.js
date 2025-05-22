const myLibrary = [];

function Book(id, title, author, published) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.published = published;
}

function addBook(title, author, published) {
    var newBook = new Book(crypto.randomUUID(), title, author, published);

    myLibrary.push(newBook);
}

