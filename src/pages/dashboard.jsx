import { useLoaderData } from "react-router-dom";

//styles
import '../styles/dashboard.css';

//  helper functions
import { createBudget, fetchData, setItem } from "../components/helper"


//components
import Intro from "../components/intro";
import { toast } from "react-toastify";
import AddBudgetForm from "../components/addBudgetForm";


// loader
export function dashboardLoader() {
    const userName = fetchData("userName");
    // const budget = fetchData("budget");
    return { userName }
}

//action

export async function dashboardAction({ request }) {

    const data = await request.formData();
    const { _action, ...values } = Object.fromEntries(data);
    console.log(values);

    if (_action === 'newUser') {
        try {
            setItem({ key: 'userName', value: JSON.stringify(values.userName) })
            return toast.success(`Welcome, ${values.userName}`)
        }
        catch (e) {
            throw new Error('Problem creating account')
        }
    }
    else if (_action === 'createBudget') {
        try {
            createBudget({ name: values.newBudget, amount: values.budgetAmount });
            return toast.success('Budget is created');
        }
        catch (e) {
            throw new Error('Problem creating the budget')
        }
    }


}
const Dashboard = () => {
    const { userName } = useLoaderData()

    return (
        <div className="dashboard">
            {userName ? (<h2> Welcome Back, {userName} </h2>) : <Intro />}
            <AddBudgetForm />
        </div>
    )
}
export default Dashboard