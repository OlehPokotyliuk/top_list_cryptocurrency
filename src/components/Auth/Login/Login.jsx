import React from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Form } from '../Form/Form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from 'redux/slices/userSlice';
import classes from './Login.module.scss'

export const Login = () => {
  
  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const handleLogin = (email, password) =>{
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then(({user})=>{
      console.log(user);
      dispatch(setUser({
        email: user.email,
        id: user.uid,
        token:user.accessToken,
      }))
      navigateTo('/');
    })
    .catch(()=>console.log('неверный логин или пароль'))
  }
  return (
    <div className={classes.login}>
      <Form
        title={'sign In'}
        handleClick={handleLogin}
      />
    </div>
  );
};

