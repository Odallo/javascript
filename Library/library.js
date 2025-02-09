const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

function displayBooks() {
    const libraryContainer = document.getElementById('library-container');
    libraryContainer.innerHTML = '';

    myLibrary.forEach((book, index) => {
        const bookCard = document.createElement("div");
        bookCard.classList.add('book-card');
        bookCard.setAttribute('data-index', index);

        bookCard.innerHTML = `
        <h2>${book.title}</h2>
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <p>Status: ${book.isRead ? 'Read' : 'Not read'}</p>
        <buttton onclick="toggleReadStatus(${index})">Toggle read status</button>
        <button onclick="removeBook(${index})">Remove book</button>
        `;

        libraryContainer.appendChild(bookCard);
    });
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    displayBooks();
}

function toggleReadStatus(index) {
    myLibrary[index].isRead = !myLibrary[index].isRead;
    displayBooks();
}

const newBookBtn = document.getElementById("new-book-btn");
const bookForm = document.getElementById("book-form");

newBookBtn.addEventListener("click", () => {
  bookForm.style.display = "block";
});

bookForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const isRead = document.getElementById("is-read").checked;

  addBookToLibrary(title, author, pages, isRead);
  displayBooks();
  bookForm.reset();
  bookForm.style.display = "none";
});

addBookToLibrary("No more mr noce guy", "Donald glover", 200, true);
addBookToLibrary("The Alchemist", "Paulo Coelho", 200, false);

displayBooks();

// Example usage:
//const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
//console.log(theHobbit.info()); 
