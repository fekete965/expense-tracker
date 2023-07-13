
import { NavLink, Form } from 'react-router-dom';
import '../styles/navbar.css';

const NavBar = ({ userName }) => {
    return (
        <nav className="navbar">
            <NavLink to='/'> <img src="logo.png" alt="budget" /> </NavLink>
            {userName && (
                <Form method="post" action="/logout" onSubmit={(event) => {
                    if (!confirm("Delete user and all data?")) {
                        event.preventDefault()
                    }
                }}>
                    <button className='btn-warning' type="submit" >Logout</button>
                </Form>
            )}

        </nav>

    )
}

export default NavBar