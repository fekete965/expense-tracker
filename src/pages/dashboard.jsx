import { useLoaderData } from "react-router-dom";

//styles
import "../styles/dashboard.css";

//components
import Intro from "../components/intro";
import AddBudgetForm from "../components/addBudgetForm";
import ExpenseForm from "../components/expenseForm";

const Dashboard = () => {
  const { userName, budget } = useLoaderData();
  console.log(budget);

  return (
    <main>
      {userName ? (
        <div className="dashboard">
          <h2> Welcome Back, {userName} </h2>
          <div className="dashboard-content">
            <AddBudgetForm />
            {budget ? <ExpenseForm budget={budget} /> : ""}
          </div>
        </div>
      ) : (
        <Intro />
      )}
    </main>
  );
};
export default Dashboard;
