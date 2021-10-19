import React, { useState } from 'react';
import { Link,useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import useFirebase from '../../Hooks/useFirebase';

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

        const {handleEmail,handlePassword ,handleLogin} = useFirebase();









    return (
        <div>
            <div className="bg-success">
                <h2 className="text-danger">Login</h2>
                <form onSubmit={handleLogin}>
                    <input className="mt-3 py-2 px-4 rounded" type="email" placeholder="your email" />
                    <br />
                    <br />
                    <input onBlur={handleEmail} className="py-2 px-4 rounded" type="password" placeholder="enter password" />
                    <br />
                    <br />
                    <input onBlur={handlePassword} className="btn btn-warning" type="submit" value="Submit" />
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