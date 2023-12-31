//  helper functions
import {
  createBudget,
  fetchData,
  setItem,
  deleteItem,
  createExpense,
} from "./helper";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";

export async function dashboardAction({ request }) {
  const data = await request.formData();
  console.log(data);

  const { _action, ...values } = Object.fromEntries(data);
  console.log(values);

  if (_action === "newUser") {
    try {
      setItem({ key: "userName", value: JSON.stringify(values.userName) });
      return toast.success(`Welcome, ${values.userName}`);
    } catch (e) {
      throw new Error("Problem creating account");
    }
  }
  if (_action === "createBudget") {
    try {
      createBudget({ name: values.newBudget, amount: values.budgetAmount });
      return toast.success("Budget is created");
    } catch (e) {
      throw new Error("Problem creating the budget");
    }
  }

  if (_action === "createExpense") {
    console.log("inside expense action ");
    try {
      createExpense({
        name: values.newExpense,
        amount: values.expenseAmount,
      });
      return toast.success("expense created ");
    } catch (e) {
      throw new Error("Problem creating expense");
    }
  }
}

export function dashboardLoader() {
  const userName = fetchData("userName");
  const budget = fetchData("budget");
  const expense = fetchData("expense");

  return { userName, budget, expense };
}

export async function logoutAction() {
  // delete the user
  deleteItem({ key: "userName" });
  //redirect
  toast.success("You are logging out!");
  return redirect("/");
}
