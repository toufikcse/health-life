import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Login.css';

const LogIn = () => {
    const {error, logIn, changeLogInEmail, changeLogInPassword} = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const redirect_url = location.state?.from || '/home';

    const handleLogIn = e => {
        e.preventDefault();
        logIn()
        .then((userCredential) => {
            // console.log(userCredential.user);
            navigate(redirect_url);
            // setError('');
        })
        .catch((error) => {
            // setError(error.message);
        });
    }

    return (
        <div className='login'>
            <div className='form-style'>
                <h2>LogIn Please</h2>
                <form  onSubmit={handleLogIn}>
                    <div className='mb-3'>
                        <label htmlFor="email" className="form-label">Email</label>
                        <input onBlur={changeLogInEmail} className="form-control" type="email" name="email" placeholder='email' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password" className="form-label">Password</label>
                        <input onBlur={changeLogInPassword} className="form-control" type="password" name="password" placeholder='password'/>
                    </div>
                    {error.length > 0 && <p style={{color: 'red'}}>{error}</p>}
                    <input type="submit" value="LogIn" />
                </form>
                <p>new to the site? <Link to="/signup">SignUp</Link></p>
            </div>
        </div>
    );
};

export default LogIn;