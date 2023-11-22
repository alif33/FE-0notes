import { combineReducers } from '@reduxjs/toolkit';
import { Api } from './api';

// console.log(productsApi.reducerPath);
export const rootReducer = combineReducers({
    [Api.reducerPath]: Api.reducer,
    // users: userSlice.reducer,
})