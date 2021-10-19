import React from 'react';
import { Link,useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const {user,signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri =location.state?.from || '/home';

        const handleGoogleLogin =() =>{
            signInUsingGoogle()
            .then(result=>{
                    history.push(redirect_uri)
            })
        }

    return (
        <div className="bg-secondary">
            <div>
                <h2 className="text-danger">Login</h2>
                <form onSubmit="" >
                    <input className="mt-3 py-2 px-4 rounded" type="email" placeholder="your email" />
                    <br />
                    <br />
                    <input className="py-2 px-4 rounded" type="password" placeholder="enter password" />
                    <br />
                    <br />
                    <input className="btn btn-warning" type="submit" value="Submit" />
                </form>
                <p className="text-white">New to NA HealthCare? 
                
                <Link to="/register">Create Account</Link> </p>
                <div>-------------or--------------</div>
                <button className="btn btn-warning mb-3"
                onClick={handleGoogleLogin}
                >Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;