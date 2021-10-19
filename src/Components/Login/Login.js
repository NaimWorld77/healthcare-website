import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="bg-secondary">
            <div>
                <form onSubmit=""  >
                    <input className="mt-3 py-2 px-4 rounded" type="email" placeholder="your email" />
                    <br />
                    <br />
                    <input className="py-2 px-4 rounded" type="password" placeholder="enter password" />
                    <br />
                    <br />
                    <input className="btn btn-warning" type="submit" value="Submit" />
                </form>
                <p className="text-white">New to NA HealthCare? <Link to="/register">Create Account</Link> </p>
                <div>-------------or--------------</div>
                <button className="btn btn-warning mb-3">Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;