const isEqual = require("lodash.isequal")

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min //The maximum is inclusive and the minimum is inclusive
}
function sleep(time) {
  return new Promise(resolve => {
    setTimeout(resolve, time)
  })
}

const expenses = [
  {
    id: "59a1c646",
    amount: 0.99,
    location: "Grocery store"
  },
  {
    id: "23559fba",
    amount: 1.99,
    location: "Burger Chain 123"
  },
  {
    id: "3237c6a6",
    amount: 2.99,
    location: "Gas Station XYZ"
  },
  {
    id: "07577aa7",
    amount: 3.99,
    location: "Hotdog stand ABC"
  },
  {
    id: "ff1dac77",
    amount: 4.99,
    location: "Grocery Store"
  }
]

const categories = [
  {
    id: "4a4355a2",
    name: "Groceries"
  },
  {
    id: "521ccd1a",
    name: "Eating out"
  },
  {
    id: "5f51fb31",
    name: "Gas"
  },
  {
    id: "2b48b7dc",
    name: "Miscellaneous"
  }
]

function fetchExpenses() {
  return sleep(0).then(() => {
    if (getRandomIntInclusive(0, 100) % 2 === 0) {
      throw new Error("Error while fetching expenses")
    }
    return { json: async () => expenses }
  })
}

function fetchCategories() {
  return sleep(0).then(() => {
    if (getRandomIntInclusive(0, 100) % 2 === 0) {
      throw new Error("Error while fetching expenses")
    }
    return { json: async () => categories }
  })
}

function fetchExpensesWithCategories(e = [], c = []) {
  if (!e || e.length < 1 || !isEqual(e, expenses)) {
    throw new Error("Expenses are required")
  }
  if (!c || c.length < 1 || !isEqual(c, categories)) {
    throw new Error("Categories are required")
  }
  return sleep(0).then(() => {
    if (getRandomIntInclusive(0, 100) % 2 === 0) {
      throw new Error("Error while fetching expenses")
    }
    return {
      json: async () => {
        return [
          {
            id: "59a1c646",
            amount: 0.99,
            location: "Grocery store",
            category: "Groceries"
          },
          {
            id: "23559fba",
            amount: 1.99,
            location: "Burger Chain 123",
            category: "Eating out"
          },
          {
            id: "3237c6a6",
            amount: 2.99,
            location: "Gas Station XYZ",
            category: "Gas"
          },
          {
            id: "07577aa7",
            amount: 3.99,
            location: "Hotdog stand ABC",
            category: "Eating out"
          },
          {
            id: "ff1dac77",
            amount: 4.99,
            location: "Grocery Store",
            category: "Groceries"
          }
        ]
      }
    }
  })
}
module.exports = {
  fetchExpenses,
  fetchCategories,
  fetchExpensesWithCategories
}
