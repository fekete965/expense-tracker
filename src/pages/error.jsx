import { useNavigate, useRouteError } from 'react-router-dom';
import '../styles/error.css';


function Error() {
    const error = useRouteError();
    const navigate = useNavigate();

    console.log(error);

    return (
        <div className="error">
            <h1>We have encountered a problem</h1>
            <p>{error?.message || error?.statusText}</p>
            <img src="error.svg" alt="error page" />
            <div className='error error-navigation'>
                <button type='submit' onClick={() => navigate(-1)} > Go back </button>
                <button type='submit' onClick={() => navigate('/')}>Go Home</button>
            </div>
        </div>
    );
}

export default Error;
