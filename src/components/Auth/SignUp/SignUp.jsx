import React from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Form } from '../Form/Form';
import { useDispatch } from 'react-redux';
import { setUser } from 'redux/slices/userSlice';
import { useNavigate } from 'react-router-dom';
export const SignUp = () => {

  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const handleRegister = async(email, password) =>{
    try{
    const auth = getAuth();
    const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredentials.user;
      dispatch(setUser({
        email: user.email,
        id: user.uid,
        token:user.accessToken,
      }));
      navigateTo('/')
  }catch(err){

    }
  }
  return (
    <Form
      title={'register'}
      handleClick={handleRegister}
    />
  );
};

