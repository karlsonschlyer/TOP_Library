const myLibrary = [];

const bookContainer = document.querySelector(".bookContainer");
const bookDialog = document.querySelector("dialog");
const newBookButton = document.querySelector("#newBook");
const form = document.querySelector("form");
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const readInput = document.querySelector("#read");

function Book(id, title, author, read) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.read = read;
}

function addBook(title, author, read) {
    var newBook = new Book(crypto.randomUUID(), title, author, read);

    myLibrary.push(newBook);
}

function displayLibrary() {
    for (var book of myLibrary) {
        const bookCard = document.createElement("div");
        bookCard.classList.add("bookCard");

        bookCard.textContent += "Title: " + book.title + "\n";
        bookCard.textContent += "Author: " + book.author + "\n";
        bookCard.textContent += "Book has been read?: " + book.read + "\n";
        bookCard.textContent += book.id + "\n";

        bookContainer.appendChild(bookCard);

    }
}

form.addEventListener("submit", formSubmit);
function formSubmit(event) {
    event.preventDefault();
    
    addBook(titleInput.value, authorInput.value, readInput.checked);
    while (bookContainer.firstChild) {
        bookContainer.removeChild(bookContainer.firstChild);
    }
    bookDialog.close();
    displayLibrary();
}

newBookButton.addEventListener("click", () => {
    bookDialog.showModal();
});

displayLibrary();