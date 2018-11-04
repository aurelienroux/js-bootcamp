const account = {
  name: 'Andrew',
  expenses: [],
  incomes: [],
  addExpense: function (description, amount) {
    this.expenses.push({
      description: description,
      amount: amount
    })
  },
  addIncome: function(description,amount) {
    this.incomes.push({
      description: description,
      amount: amount
    })
  },
  getSummary: function () {
    let totalExpenses = 0
    let totalIncomes = 0
    let balance = totalIncomes - totalExpenses
    
    this.expenses.forEach(function (expense) {
      totalExpenses += expense.amount
    })
    
    this.incomes.forEach(function(income) {
      totalIncomes += income.amount
    })
    
    balance = totalIncomes - totalExpenses
    
    return `${this.name} has a balance of $${balance}. 
    $${totalIncomes} in incomes. 
    $${totalExpenses} in expenses`
  }
}

account.addExpense('rent', 950)
account.addExpense('coffee', 2)
account.addExpense('grocery', 261)
account.addIncome('salary', 1500)
console.log(account.getSummary())
