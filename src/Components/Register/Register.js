
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import useFirebase from '../../Hooks/useFirebase';

const Register = () => {
    const {user,signInUsingGoogle } = useAuth();
    const {handleEmail,handlePassword ,handleRegister,error} = useFirebase();
    

     return (
        <div className="" >
            <div className="bg-success" width="40%">
                <h2 className="text-danger">Create Account</h2>
            <form onSubmit={handleRegister}>
                    <input  onBlur={handleEmail} className="mt-3 py-2 px-4 rounded" type="email" placeholder="your email" />
                    <br />
                    <br />
                    <input  onBlur={handlePassword} className="py-2 px-4 rounded" type="password" placeholder="enter password" />
                    <br />
                    <br />
                    <div>
                        <h5 className="py-1 text-danger">{error}</h5>
                    </div>
                    <input  className="btn btn-warning" type="submit" value="Submit" />
                </form>
                <p className="text-white">Already have an account? <Link to="/login">Login</Link> </p>
                <div>-------------or--------------</div>
                <button 
                onClick={signInUsingGoogle}
                className="btn btn-warning mb-3">Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;