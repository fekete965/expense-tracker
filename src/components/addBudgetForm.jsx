import { useEffect, useRef } from "react";
import { useFetcher } from "react-router-dom";

export default function AddBudgetForm() {
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
      <h2 className="form-title"> Create budget </h2>

      <fetcher.Form method="post" ref={formRef}>
        <div className="form-data">
          <label htmlFor="newBudget">Budget Name</label>
          <input
            type="text"
            name="newBudget"
            id="newBudget"
            placeholder="Groceries"
            required
            ref={inputRef}
          />

          <label htmlFor="budgetAmount">Amount</label>
          <input
            type="number"
            name="budgetAmount"
            id="budgetAmount"
            placeholder="$200"
            required
          />

          <button className="btn" type="submit" disabled={isSubmitting}>
            {" "}
            Create Budget{" "}
          </button>
        </div>
        <input type="hidden" name="_action" value="createBudget" />
      </fetcher.Form>
    </div>
  );
}
