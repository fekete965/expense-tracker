import { useLoaderData } from "react-router-dom";

//  helper functions
import { fetchData } from "../components/helper"

// loader
export function dashboardLoader() {
    const userName = fetchData("userName");
    return { userName }
}

const Dashboard = () => {
    const { userName } = useLoaderData()

    return (
        <div>
            <h1>{userName}</h1>
            <h2>Dashboard </h2>
        </div>
    )
}
export default Dashboard