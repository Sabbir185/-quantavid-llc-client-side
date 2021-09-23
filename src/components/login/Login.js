import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import { setToken } from '../../lib/auth';
import './Login.css'

const Login = () => {
    const history = useHistory();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    // handle user sign up
    const handleLogin = async (event) => {
        event.preventDefault();
        const data = {
            email: event.target[0].value,
            password: event.target[1].value,
        }
        await fetch(`https://guarded-waters-35638.herokuapp.com/api/user/login`, {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            setToken(data.token)
            setLoggedInUser(data)
            if(data.token){
                history.push('/')
            }
        })
    }

    return (
         <div className="form-container">

            <form  className="mx-5" onSubmit={handleLogin}>
                <input type="email" name="email" placeholder="email" className="form-control"/>

                <input type="text" name="password" placeholder="Password" className="form-control mt-2"/>

                <button type="submit" className="btn btn-success text-center mt-4 form-control"> Login </button>

            </form>

            <small className="mt-3 d-inline-block">Don't have an account ? please <Link to='/sign-up' className="text-decoration-none fw-bold">sign up</Link></small>
        </div>
    );
};

export default Login;