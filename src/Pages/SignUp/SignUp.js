import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './SignUp.css';

const SignUp = () => {
    const {error, signUp, changeSignUpEmail, changeSignUpPassword} = useAuth();

    return (
        <div className='signup'>
            <div className='form-style'>
                <h2>SignUp Please</h2>
                <form  onSubmit={signUp}>
                    <div className='mb-3'>
                        <label htmlFor="email" className="form-label">Email</label>
                        <input onBlur={changeSignUpEmail} className="form-control" type="email" name="email" placeholder='email' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password" className="form-label">Password</label>
                        <input onBlur={changeSignUpPassword} className="form-control" type="password" name="password" placeholder='password'/>
                    </div>
                    {error.length > 0 && <p style={{color: 'red'}}>{error}</p>}
                    <input type="submit" value="SignUp" />
                </form>
                <p>Already Register? <Link to="/login">LogIn</Link></p>
                {/* <h2>SignUp Please</h2>
                <form onSubmit={signUp}>
                    <label htmlFor="email">Email</label>
                    <input onBlur={changeSignUpEmail} type="email" name="email" placeholder='email' />
                    <br />
                    <label htmlFor="password">Password</label>
                    <input onBlur={changeSignUpPassword} type="password" name="password" placeholder='password'/>
                    <br />
                    {error.length > 0 && <p style={{color: 'red'}}>{error}</p>}
                    <input type="submit" value="SignUp" />
                </form>
                <p>Already Register? <Link to="/login">LogIn</Link></p> */}
            </div>
        </div>
    );
};

export default SignUp;