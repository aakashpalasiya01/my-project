import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './reducers/homeReducer';
const store =configureStore({
     reducer:{
        home :homeReducer,
     }
})
export default store