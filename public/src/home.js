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
  let map = {};
  books.forEach((num) => {
    if (map[num.genre]) {
      map[num.genre]++;
    } else {
      map[num.genre] = 1;
    }
  });
  return Object.entries(map)
    .map(([name, count]) => {
      return {
        name,
        count,
      };
    })
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);
}

function getMostPopularBooks(books) {
  let mostPopularBooks = [];
  for (const book of books) {
    mostPopularBooks.push({ name: book.title, count: book.borrows.length });
  }
  mostPopularBooks.sort((a, b) => (a.count < b.count ? 1 : -1));
  mostPopularBooks.splice(5);
  return mostPopularBooks;
}

function getMostPopularAuthors(books, authors) {
  let mostPopularAutorList = [];
  authors.forEach((author) => {
    let writer = {
      name: `${author.name.first} ${author.name.last}`,
      count: 0,
    };
    books.forEach((book) => {
      if (book.authorId === author.id) {
        writer.count += book.borrows.length;
      }
    });
    mostPopularAutorList.push(writer);
  });
  return mostPopularAutorList.sort((a, b) => b.count - a.count).slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
