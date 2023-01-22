function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let booksBorrowed = books.filter(
    (book) =>
      book.borrows.filter((record) => record.returned === false).length > 0
  );
  return booksBorrowed.length;
}

function getMostCommonGenres(books) {

}

function getMostPopularBooks(books) {

}

function getMostPopularAuthors(books, authors) {
  
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
