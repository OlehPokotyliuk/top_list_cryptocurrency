import React, { useEffect, useState } from 'react';
import classes from './FilterList.module.scss'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { sortPrice} from 'redux/slices/coinSlice';

export const FilterList = () => {
  const dispatch = useDispatch();
  const selectorPrice = useSelector(state=>state?.coins?.coins?.Data);
  const [priceAscending, setPriceAscending] = useState(true);
 
  const linkHandler = (e) =>{
    const {value} = e.currentTarget.dataset;
    if(value === 'PRICE' || value === "CHANGEHOUR" || value === "CHANGE24HOUR" || value === "MKTCAP" || value === "CIRCULATINGSUPPLY" || value === "VOLUME24HOUR"){
      const val = value;
      const sortedSelectorId = [...selectorPrice];
      sortedSelectorId.sort((a,b)=>{
        const priceA = a?.RAW?.USD?.[val] || 0;
        const priceB = b?.RAW?.USD?.[val] || 0;
        return priceAscending ? priceA - priceB : priceB - priceA; 
      });
      dispatch(sortPrice(sortedSelectorId));
      setPriceAscending(!priceAscending)
    }
  }
  return (
    <div className={classes.filterList}>
      <Link className={classes.coinsName}><span data-value="id" onClick={(e)=>linkHandler(e)}> </span></Link>
      <Link className={classes.coinsPrice}><span data-value="PRICE" onClick={(e)=>linkHandler(e)}>Price ($) : </span></Link>
      <Link className={classes.changeHour}><span data-value="CHANGEHOUR" onClick={(e)=>linkHandler(e)}>1h: </span></Link>
      <Link className={classes.changeDay}><span data-value="CHANGE24HOUR" onClick={(e)=>linkHandler(e)}>24h: </span></Link>
      <Link className={classes.marketCap}><span  data-value="MKTCAP" onClick={(e)=>linkHandler(e)}>capitalization: </span></Link>
      <Link className={classes.circulationSupply}><span  data-value="CIRCULATINGSUPPLY" onClick={(e)=>linkHandler(e)}>circulation supply: </span></Link>
      <Link className={classes.volume}><span data-value="VOLUME24HOUR" onClick={(e)=>linkHandler(e)}>volume 24H: </span></Link>
    </div>
  );
};

