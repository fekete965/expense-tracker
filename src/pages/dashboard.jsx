import { useLoaderData } from "react-router-dom";

//styles
import "../styles/dashboard.css";

//components
import Intro from "../components/intro";
import AddBudgetForm from "../components/addBudgetForm";
import ExpenseForm from "../components/expenseForm";
import BudgetItem from "../components/budgetItem";

const Dashboard = () => {
  const { userName, budget } = useLoaderData();
  console.log(budget);

  return (
    <main>
      {userName ? (
        <div className="dashboard">
          <h2> Welcome Back, {userName} </h2>
          <div className="dashboard-content">
            <div className="form">
              {budget && budget.length > 0 ? (
                <div className="main-content">
                  <div className="content">
                    <AddBudgetForm />
                    <ExpenseForm budget={budget} />
                  </div>

                  <div className="budgets">
                    <h3>Exisiting Budgets</h3>
                    {budget.map((budget) => (
                      <BudgetItem key={budget.id} budget={budget} />
                    ))}
                  </div>
                </div>
              ) : (
                <div className="content">
                  <p> Personal budgeting is the key</p>
                  <p>Create a budget to get started!</p>
                  <AddBudgetForm />
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <Intro />
      )}
    </main>
  );
};
export default Dashboard;
