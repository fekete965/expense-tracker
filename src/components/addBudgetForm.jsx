
import { Form } from 'react-router-dom';

export default function AddBudgetForm() {
    return (
        <div className="form-wrapper">
            <h2 className="form-title"> Create budget </h2>

            <Form method='post' >
                <div className="form-data">
                    <label htmlFor="newBudget">Budget Name</label>
                    <input type="text" name="newBudget" id="newBudget" required />

                    <label htmlFor="budgetAmount">Amount</label>
                    <input type="number" name="budgetAmount" id="budgetAmount" required />

                    <button className='btn' type="submit"> Create Budget </button>
                </div>
                <input type="hidden" name="_action" value="createBudget" />

            </Form>

        </div>
    )
}
