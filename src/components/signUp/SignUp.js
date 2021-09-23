import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'

const SignUp = () => {
    // handle user sign up
    const handleUserSignUp = (event) => {
        event.preventDefault();
        const data = {
            name: event.target[0].value,
            email: event.target[1].value,
            password: event.target[2].value,
        }
        console.log(data)
    }


    return (
        <div>
             <div className="form-container">
                    <form  className="mx-5" onSubmit={handleUserSignUp}>
                       <input type="text" name="name" placeholder="Name" className="form-control mt-2"/>

                       <input type="email" name="email" placeholder="Email" className="form-control mt-2"/>

                       <input type="password" name="password" placeholder="Password" className="form-control mt-2"/>

                       <button type="submit" className="btn btn-success text-center mt-4 form-control"> Sign Up </button>

                    </form>

                    <small className="mt-3 d-inline-block">Already sign up ? please <Link to='/login' className="text-decoration-none">login</Link></small>
                </div>
        </div>
    );
};

export default SignUp;