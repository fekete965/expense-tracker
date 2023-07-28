import { useEffect, useRef } from "react";
import { useFetcher } from "react-router-dom";

function ExpenseForm({ budget }) {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";

  const formRef = useRef();
  const inputRef = useRef();
  console.log(budget.length);

  useEffect(() => {
    if (!isSubmitting) {
      formRef.current.reset();
      inputRef.current.focus();
    }
  }, [isSubmitting]);

  return (
    <div className="form-wrapper">
      <h2 className="form-title">
        Add new
        <span>
          {budget.length === 1 && `${budget.map((budget) => budget.name)}`}
        </span>
        Expense
      </h2>

      <fetcher.Form method="post" ref={formRef}>
        <div className="form-data">
          <div className="form-input">
            <label htmlFor="newExpense">Expense Name</label>
            <input
              type="text"
              name="newExpense"
              id="newExpense"
              placeholder="Restaurant"
              required
              ref={inputRef}
            />
          </div>
          <div className="form-input">
            <label htmlFor="expenseAmount">Amount</label>
            <input
              type="number"
              name="expenseAmount"
              id="expenseAmount"
              placeholder="$50"
              required
            />
          </div>
          {budget.length <= 1 ? null : (
            <div className="form-input" >
              <label htmlFor="expenseCategory"> Budget category </label>
              <select name="expenseCategory" id="expenseCategory" required>
                {budget
                  .sort((a, b) => a.createdAt - b.createdAt)
                  // (a, b) => (a.name !== b.name ? (a.name < b.name ? -1 : 1) : 0) // ordering alphabets
                  .map((budget) => {
                    return (
                      <option key={budget.id} value={budget.id}>
                        {budget.name}
                      </option>
                    );
                  })}
              </select>
            </div>
          )}

          <button className="btn" type="submit" disabled={isSubmitting}>
            Add expense{" "}
          </button>
        </div>
        <input type="hidden" name="_action" value="createExpense" />
      </fetcher.Form>
    </div>
  );
}

export default ExpenseForm;
