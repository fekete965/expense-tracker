// local storage

export const fetchData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

//delete item

export const deleteItem = ({ key }) => {
  return localStorage.removeItem(key);
};

//set item
export const setItem = ({ key, value }) => {
  localStorage.setItem(key, value);
};

//create budget
export const createBudget = ({ name, amount }) => {
  const newItem = {
    id: crypto.randomUUID(),
    name: name,
    amount: Number(amount),
    createdAt: Date.now(),
  };

  const existingBudgets = fetchData("budget") ?? [];
  return localStorage.setItem(
    "budget",
    JSON.stringify([...existingBudgets, newItem])
  );
};

//create expense

export const createExpense = ({ name, amount }) => {
  const newItem = {
    id: crypto.randomUUID(),
    name: name,
    amount: +amount,
    // budgetId: budgetId,
    createdAt: Date.now(),
  };

  const existingExpense = fetchData("expense") ?? [];
  return localStorage.setItem([
    "expense",
    JSON.stringify([...existingExpense, newItem]),
  ]);
};
