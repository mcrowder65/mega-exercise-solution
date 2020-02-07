Welcome back friends!

Let's finish the implementation of `fetchExpenses first`.

So what do we do if the `utilities.fetchExpenses` fails?

We can actually just call `fetchExpenses` in the `.catch` block

If you see the terminal, you can see that it's working, let's do some more runs to ensure it's working

5 runs

Alright, let's implement `fetchCategories`

```js
function fetchCategories() {
  return utilities
    .fetchCategories()
    .then(result => result.json())
    .catch(fetchCategories)
}

fetchExpenses()
  .then(expenses => {
    return fetchCategories()
  })
  .then(console.log)
```

Ok, now we can see the result of fetchCategories getting printed 5 times, and we're handling errors.

If we removed that `.catch`, then it would fail intermittently.

now let's implement `utilities.fetchExpensesWithCategories`

```js
function fetchExpensesWithCategories() {}

fetchExpenses()
  .then(expenses => {
    return fetchCategories().then(categories => {
      return fetchExpensesWithCategories()
    })
  })
  .then(console.log)
```

Alright now we can see undefined getting printed. We need to pass in expenses and categories into `fetchExpensesWithCategories`

And use those to get the final result.

```js
function fetchExpensesWithCategories(expenses, categories) {}

fetchExpenses()
  .then(expenses => {
    return fetchCategories().then(categories => {
      return fetchExpensesWithCategories(expenses, categories)
    })
  })
  .then(console.log)
```

```js
function fetchExpensesWithCategories(expenses, categories) {
  return utilities.fetchExpensesWithCategories(expenses, categories)
}
```

Alright, with a successful response, you can see we have that object with json in there.

Let's resolve `.json`

```js
function fetchExpensesWithCategories(expenses, categories) {
  return utilities
    .fetchExpensesWithCategories(expenses, categories)
    .then(result => result.json())
}
```

refresh

OK great, you can see all of these things getting printed.

Now we need to handle the scenario where an error happens.

So let's add that .catch there.

```js
function fetchExpensesWithCategories(expenses, categories) {
  return utilities
    .fetchExpensesWithCategories(expenses, categories)
    .then(result => result.json())
    .catch(fetchExpensesWithCategories)
}
```

OH no! It's still actually failing occassionally, even with the .catch...

What do you think we have to change here to get it to work?

We're not actually passing in expenses or categories in the event that it fails! So we need to wrap that catch call
in an anonymous function.

```js
function fetchExpensesWithCategories(expenses, categories) {
  return utilities
    .fetchExpensesWithCategories(expenses, categories)
    .then(result => result.json())
    .catch(() => fetchExpensesWithCategories(expenses, categories))
}
```

And we can see in the output that it's working!

Let's refresh a couple of times to be sure

And we are consistently getting the enhanced expenses with categories automatically applied!

Good job, I hope you had fun with this exercise.
