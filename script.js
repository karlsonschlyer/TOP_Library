const myLibrary = [];

const bookContainer = document.querySelector(".bookContainer");
const bookDialog = document.querySelector("dialog");
const newBookButton = document.querySelector("#newBook");

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

newBookButton.addEventListener("click", () => {
    bookDialog.show();
});


addBook("Test Title", "Author", true);

for (var book of myLibrary) {
    const bookCard = document.createElement("div");
    bookCard.classList.add("bookCard");

    bookCard.textContent += book.title + "\n";
    bookCard.textContent += book.author + "\n";
    bookCard.textContent += book.read + "\n";
    bookCard.textContent += book.id + "\n";

    bookContainer.appendChild(bookCard);

}
