//  helper functions
import { createBudget, fetchData, setItem } from "../components/helper";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";
import { deleteItem } from "../components/helper";

export async function dashboardAction({ request }) {
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);
  console.log(values);

  if (_action === "newUser") {
    try {
      setItem({ key: "userName", value: JSON.stringify(values.userName) });
      return toast.success(`Welcome, ${values.userName}`);
    } catch (e) {
      throw new Error("Problem creating account");
    }
  } else if (_action === "createBudget") {
    try {
      createBudget({ name: values.newBudget, amount: values.budgetAmount });
      return toast.success("Budget is created");
    } catch (e) {
      throw new Error("Problem creating the budget");
    }
  }
}

export function dashboardLoader() {
  const userName = fetchData("userName");
  // const budget = fetchData("budget");
  return { userName };
}

export async function logoutAction() {
  // delete the user
  deleteItem({ key: "userName" });
  //redirect
  toast.success("You are logging out!");
  return redirect("/");
}
