const utilities = require("./utilities")
function fetchExpenses() {
  return utilities
    .fetchExpenses()
    .then(result => result.json())
    .catch(fetchExpenses)
}

function fetchCategories() {
  return utilities
    .fetchCategories()
    .then(result => result.json())
    .catch(fetchCategories)
}

function fetchExpensesWithCategories(expenses, categories) {
  return utilities
    .fetchExpensesWithCategories(expenses, categories)
    .then(result => result.json())
    .catch(() => fetchExpensesWithCategories(expenses, categories))
}
fetchExpenses()
  .then(expenses => {
    return fetchCategories().then(categories => {
      return fetchExpensesWithCategories(expenses, categories)
    })
  })
  .then(console.log)
