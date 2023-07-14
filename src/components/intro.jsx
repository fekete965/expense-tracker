
import { Form } from 'react-router-dom';

//styles
import '../index.css';
import '../styles/intro.css';

export default function Intro() {
    return (
        <main>
            <div className="intro">
                <h1>Take control of <span>Your Money</span></h1>
                <p>Personal budgeting is the secret to financial independence.</p>
                <Form className='intro intro-form' method='post' >
                    <input type="text" name="userName" id="userName" placeholder="What's your name?" required />
                    <button className='btn create-btn' type="submit">Create Account</button>
                    <input type="hidden" name="_action" value="newUser" />
                </Form>
            </div>
            <img src="investment.svg" alt="person with chart" aria-label='Investment' />
        </main>
    )
}
