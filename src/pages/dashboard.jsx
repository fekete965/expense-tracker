import { useLoaderData } from "react-router-dom";

//styles
import '../styles/dashboard.css';

//  helper functions
import { fetchData, setItem } from "../components/helper"


//components
import Intro from "../components/intro";
import { toast } from "react-toastify";
// import AddBudgetForm from "../components/addBudgetForm";


// loader
export function dashboardLoader() {
    const userName = fetchData("userName");
    // const budget = fetchData("budget");
    return { userName }
}

//action

export async function dashboardAction({ request }) {

    const data = await request.formData();
    const formData = Object.fromEntries(data);
    console.log(formData);
    try {
        setItem({ key: 'userName', value: JSON.stringify(formData.userName) })
        return toast.success(`Welcome, ${formData.userName}`)
    }
    catch (e) {
        throw new Error('Problem creating account')
    }


}
const Dashboard = () => {
    const { userName } = useLoaderData()

    return (
        <div className="dashboard">
            {userName ? (<h2> Welcome Back, {userName} </h2>) : <Intro />}
            {/* <AddBudgetForm /> */}
        </div>
    )
}
export default Dashboard