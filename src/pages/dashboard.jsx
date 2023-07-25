import { useLoaderData } from "react-router-dom";

//styles
import "../styles/dashboard.css";

//components
import Intro from "../components/intro";
import AddBudgetForm from "../components/addBudgetForm";

const Dashboard = () => {
  const { userName } = useLoaderData();

  return (
    <div className="dashboard">
      {userName ? <h2> Welcome Back, {userName} </h2> : <Intro />}
      <AddBudgetForm />
    </div>
  );
};
export default Dashboard;
