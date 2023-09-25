import React from 'react';
import classes from './CoinsList.module.scss';
import { useSelector } from 'react-redux';

export const CoinsList = ({currentItems}) => {
  return (
    <div className={classes.coinsWrapper}>
      {currentItems&&
        currentItems.map((item, index)=>(
          
          <div className={classes.coinsList} key={index}>
              <div className={classes.coinsBlock}>
                <div className={classes.coinsName}>
                  <img className={classes.image} src={`https://www.cryptocompare.com/media/${item?.CoinInfo?.ImageUrl}`} alt="" />
                  <p>{item.CoinInfo.FullName}</p>
                </div>
                <div className={classes.coinsPrice}>
                  {
                    item?.RAW?.USD?.PRICE.toFixed(2)
                  }
                </div>
                <div className={classes.changeHour}>
                 { 
                  item?.DISPLAY?.USD?.CHANGEHOUR.slice(2) > 0
                  ?
                  <p style={{color:"green", fontWeight:"bold"}}>{item?.DISPLAY?.USD?.CHANGEHOUR}</p>
                  :
                  <p style={{color:"red", fontWeight:"bold"}}>{item?.DISPLAY?.USD?.CHANGEHOUR}</p>
                 }
                 
                </div>
                <div className={classes.changeDay}>
                  {
                    item?.DISPLAY?.USD?.CHANGE24HOUR.slice(2)> 0
                    ?
                    <p style={{color:"green", fontWeight:"bold"}}>{item?.DISPLAY?.USD?.CHANGE24HOUR}</p>
                    :
                    <p style={{color:"red", fontWeight:"bold"}}>{item?.DISPLAY?.USD?.CHANGE24HOUR}</p>
                  }
                </div>
                <div className={classes.marketCap}>
                  
                  <p>{item?.DISPLAY?.USD?.MKTCAP}</p>
                </div>
                <div className={classes.circulationSupply}>
                  
                  <p>{item?.DISPLAY?.USD?.CIRCULATINGSUPPLY}</p>
                </div>
                <div className={classes.volume}>
                  <p>{item?.RAW?.USD?.VOLUME24HOUR.toFixed(2)}</p>
                </div>
              </div>
          </div>
        ))
      }
    </div>
  );
};

