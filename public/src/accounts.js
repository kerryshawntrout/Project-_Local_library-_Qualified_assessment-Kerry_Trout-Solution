function findAccountById(accounts, id) {
  let targetAccount;
  accounts.forEach(function (account) {
    if (account.id === id) {
      targetAccount = account;
    }
  });
  return targetAccount;
}

function sortAccountsByLastName(accounts) {}

function getTotalNumberOfBorrows(account, books) {}

function getBooksPossessedByAccount(account, books, authors) {}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
