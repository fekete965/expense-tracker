import { useEffect, useRef } from "react";
import { useFetcher } from "react-router-dom";

function ExpenseForm() {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";

  const formRef = useRef();
  const inputRef = useRef();

  useEffect(() => {
    if (!isSubmitting) {
      formRef.current.reset();
      inputRef.current.focus();
    }
  }, [isSubmitting]);
  return (
    <div className="form-wrapper">
      <h2 className="form-title">
        {" "}
        Add new <span> </span> Expense
      </h2>

      <fetcher.Form method="post" ref={formRef}>
        <div className="form-data">
          <label htmlFor="newExpense">Expense Name</label>
          <input
            type="text"
            name="newExpense"
            id="newExpense"
            placeholder="Restaurant"
            required
            ref={inputRef}
          />

          <label htmlFor="expenseAmount">Amount</label>
          <input
            type="number"
            name="expenseAmount"
            id="expenseAmount"
            placeholder="$50"
            required
          />

          <button className="btn" type="submit" disabled={isSubmitting}>
            {" "}
            Add expense{" "}
          </button>
        </div>
        <input type="hidden" name="_action" value="expenseForm" />
      </fetcher.Form>
    </div>
  );
}

export default ExpenseForm;
