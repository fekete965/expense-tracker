// local storage

export const fetchData = (key) => {
    return JSON.parse(localStorage.getItem(key));
}

//delete item 

export const deleteItem = ({ key }) => {
    return localStorage.removeItem(key)

}

//set item 
export const setItem = ({ key, value }) => {
    localStorage.setItem(key, value);
}

//create budget 
export const createBudget = ({ name, amount }) => {
    const newItem = {
        id: crypto.randomUUID(),
        name: name,
        amount: Number(amount),
    }

    const existingBudgets = fetchData("budget") ?? [];
    return localStorage.setItem("budget", JSON.stringify([...existingBudgets, newItem]));

}   