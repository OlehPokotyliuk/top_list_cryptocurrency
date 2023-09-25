import React from 'react';
import { Link } from 'react-router-dom';
import { Login } from 'components/Auth/Login/Login';
import classes from './LoginPage.module.scss';

const LoginPage = () => {
  return (
    <div className={classes.loginPage}>
      <h1>Login</h1>
      <Login/>
      <p>
        or <Link to='/register'>Register</Link>
      </p>
    </div>
  );
};

export default LoginPage;