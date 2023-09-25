import React from 'react';
import { Link } from 'react-router-dom';
import { SignUp } from 'components/Auth/SignUp/SignUp';
import classes from './RegisterPage.module.scss';

export const RegisterPage = () => {
  return (
    <div className={classes.registerPage}>
      <h1>Register</h1>
      <SignUp/>
      <p>
        Have a account? <Link to='/login'>Sign in</Link>
      </p>
    </div>
  );
};

