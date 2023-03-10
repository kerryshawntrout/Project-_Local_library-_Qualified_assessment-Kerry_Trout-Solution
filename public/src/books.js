function findAuthorById(authors, id) {
  let correctAuthor = authors.find((author) => author.id === id);
  return correctAuthor;
}

function findBookById(books, id) {
  let correctBook = books.find((book) => book.id === id);
  return correctBook;
}

function partitionBooksByBorrowedStatus(books) {
  let finalAnswer = [];
  let booksIn = [];
  let booksOut = [];
  for (i = 0; i < books.length; i++) {
    if (books[i].borrows[0].returned === true) {
      booksIn.push(books[i]);
    } else {
      booksOut.push(books[i]);
    }
  }
  finalAnswer = [[...booksOut], [...booksIn]];
  return finalAnswer;
}

function getBorrowersForBook(book, accounts) {
  return book.borrows
    .map((borrow) => {
      let account = accounts.find((account) => account.id === borrow.id);
      return { ...borrow, ...account };
    })
    .slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
