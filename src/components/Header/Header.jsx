import React,{  useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSearchValue, clearInput, selectorOption } from './../../redux/slices/coinSlice'
import debounce from 'lodash.debounce';
import classes from './Header.module.scss'
import { Link } from 'react-router-dom';
import Logout from './LogOut/Logout';

export const Header = ({email}) => {
  let [inputValue, setInputValue] = useState('');
  const cryptoItemsList = useSelector(state=>state.coins.filterItems); 

  const dispatch = useDispatch();
  const handleChange = (value)=>{
    setInputValue(value);          
    dispatch(addSearchValue(value));
  }
  const debounceInput = debounce(handleChange, 150);
  
  const clear = () =>{
    dispatch(clearInput());
    setInputValue("");
  }
  
  return (
    <div className={classes.wrapper}>
      <div className={classes.logo}>
        <Link to='/'><img src="image/bitcoin.png" alt="logo" /></Link>
      </div>
      <div className={classes.list}>
        <h2>TOP - 100 CRYPTOCURRENCY LIST</h2>
      </div>
      <div className={classes.formWrapper}>
        <div className={classes.inputWrapper}>
          <input 
            className={classes.textInput}
            type="text" 
            placeholder='search coin'
            value={inputValue}
            onChange={(e)=>debounceInput(e.target.value)}
          />
          <Link className={classes.close} onClick={clear}>✕</Link>
        </div>
        {cryptoItemsList !== 100 ?<p className={classes.paragraph}>Найдено <span>{cryptoItemsList}</span> елементов</p> : ' '}
      </div>
      <Logout email={email}/>
    </div>
  );
};

