import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {

    // handle user sign up
    const handleLogin = (event) => {
        event.preventDefault();
        const data = {
            username: event.target[0].value,
            password: event.target[1].value,
        }
        console.log(data)
    }

    return (
         <div className="form-container">
            <form  className="mx-5" onSubmit={handleLogin}>
                <input type="email" name="email" placeholder="email" className="form-control"/>

                <input type="text" name="password" placeholder="Password" className="form-control mt-2"/>

                <button type="submit" className="btn btn-success text-center mt-4 form-control"> Login </button>

            </form>

            
            <small className="mt-3 d-inline-block">Don't have an account ? please <Link to='/sign-up' className="text-decoration-none">sign up</Link></small>
        </div>
    );
};

export default Login;