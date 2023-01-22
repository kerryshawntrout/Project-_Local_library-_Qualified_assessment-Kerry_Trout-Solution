function findAccountById(accounts, id) {
  let targetAccount;
  accounts.forEach(function (account) {
    if (account.id === id) {
      targetAccount = account;
    }
  });
  return targetAccount;
}
//helper function
function arrange(accounts) {
  let arrangedAccounts = accounts.sort(function (a, b) {
    let nameA = a.name.last;
    let nameB = b.name.last;
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  return arrangedAccounts;
}
function sortAccountsByLastName(accounts) {
  let sortedAccounts = arrange(accounts);
  return sortedAccounts;
}
//rewrote function to use .reduce()
function getTotalNumberOfBorrows(account, books) {
  return books.reduce((allBorrows, book) => {
    return (
      allBorrows +
      book.borrows.reduce((borrows, borrow) => {
        return borrows + (account.id === borrow.id ? 1 : 0);
      }, 0)
    );
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  let possessed = [];
  let borrowMatch = [];
  books.forEach((item) => {
    const borrowed = item.borrows;
    const book = {
      id: item.id,
      title: item.title,
      genre: item.genre,
      authorId: item.authorId,
      author: {},
      borrows: {},
    };
    const { id, title, genre, authorId, author, borrows } = book;

    borrowed.forEach((borrow) => {
      if (borrow.id === account.id && borrow.returned === false) {
        possessed.push(book);
        borrowMatch.push(borrow);
        book.borrows = borrowMatch;
        book.author = authors.filter((auth) => auth.id === book.authorId)[0];
      }
    });
  });
  return possessed;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
