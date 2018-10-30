let myAccount = {
  name: "john",
  expenses: 0,
  income: 0
}

let addExpenses = function(account, amount) {
  account.expenses = account.expenses + amount
  console.log(account);
}

addExpenses(myAccount, 2.5);

console.log(myAccount);
