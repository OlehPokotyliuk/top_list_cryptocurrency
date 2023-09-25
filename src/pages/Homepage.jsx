import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCoinsStatus, fetchCoins, filterInputValue } from './../redux/slices/coinSlice';
import { FilterList } from './../components/FilterList/FilterList';
import { Header } from './../components/Header/Header';
import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { removeUser } from 'redux/slices/userSlice';
import { Paginate } from 'components/Paginate/Paginate';
const Homepage = () => {
  const coinsStatus = useSelector(getCoinsStatus);
  const coins = useSelector((state) => state.coins.coins);
  const search = useSelector((state) => state.coins.searchValue);
  const [items, setItems] = useState([]);
  const dispatch = useDispatch();
 
  dispatch(filterInputValue(items.length));
  useEffect(() => {
    if (coinsStatus === 'idle') {
      dispatch(fetchCoins());
    }
  }, [coinsStatus, dispatch]);

  useEffect(() => {
    if (coins && coins.Data) {
      const coinsList = coins.Data;
      const filteredItems = coinsList.filter((item) =>
        item.CoinInfo.FullName.toLowerCase().includes(search.toLowerCase()).length !== 0
        ? 
        item.CoinInfo.FullName.toLowerCase().includes(search.toLowerCase())
        :
        coins
      );
      setItems(filteredItems);
    }
  }, [coins, search]);
  
  const {isAuth, email} = useAuth();
  return isAuth?(
  <>
    <Header email={email}/>
    <FilterList/>
    <Paginate itemsPerPage={10} items={items}/>
  </>
  ):(<Navigate to='/login'/>)
};

export default Homepage;