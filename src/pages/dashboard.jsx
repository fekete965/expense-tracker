import { useLoaderData } from "react-router-dom";

//  helper functions
import { fetchData, setItem } from "../components/helper"


//components
import Intro from "../components/intro";
import { toast } from "react-toastify";


// loader
export function dashboardLoader() {
    const userName = fetchData("userName");
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
        <div>
            {userName ? (<h2> {userName}</h2>) : <Intro />}
        </div>
    )
}
export default Dashboard