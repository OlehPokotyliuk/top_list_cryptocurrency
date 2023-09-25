
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const coinsUrl = 'https://min-api.cryptocompare.com/data/top/totalvolfull?limit=100&tsym=USD';
const initialState = {
  coins: [],
  searchValue:'',
  filterItems: '',
  pageitems: [],
  status: 'idle',
  error: null,
  };
  export const fetchCoins = createAsyncThunk('coins/fetchCoins', 
  async()=>{
    const response = await axios.get(coinsUrl);
    return response.data;
  }
  )

const coinsSlice = createSlice({
  name: 'coins',
  initialState,
  reducers: {
    addSearchValue(state, action){
      state.searchValue = action.payload;
    },
    clearInput(state){
      state.searchValue = '';
    },
    sortPrice(state, action){
      state.coins.Data = action.payload;
    },
    filterInputValue(state,action){
      state.filterItems = action.payload;
    },
    getPageItems(state, action){
      state.pageitems = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchCoins.pending, (state) => {
    state.status = 'loading';
    })
    .addCase(fetchCoins.fulfilled, (state, action) => {
    state.status = 'succeeded';
    state.coins = action.payload;
    })
    .addCase(fetchCoins.rejected, (state, action) => {
    state.status = 'failed';
    state.error = action.error.message;
    });

    },
});
export const selectAllCoins = (state) => state.coins.coins;
export const getCoinsStatus = (state) => state.coins.status;
export const getCoinsError = (state) => state.coins.error;
export const {addSearchValue, clearInput, sortPrice, filterInputValue, getPageItems} = coinsSlice.actions;
export default coinsSlice.reducer;

