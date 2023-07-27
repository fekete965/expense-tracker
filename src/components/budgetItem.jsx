import "../styles/dashboard.css";

export default function BudgetItem({ budget }) {
  console.log(budget);
  const { name, amount } = budget;
  return (
    <div className="budget-card">
      <div className="budget-title">
        <h3>{name}</h3>
        <h4>{amount}</h4>
      </div>
      <progress max={amount} value={amount}>
        {" "}
      </progress>
    </div>
  );
}
