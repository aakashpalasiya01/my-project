import { configureStore,Action,ThunkAction } from '@reduxjs/toolkit';
import homeReducer from './reducers/homeReducer';
import autuReducer from './reducers/homeReducer'

export const store =configureStore({
     reducer:{
        home :homeReducer,
        auth:autuReducer
     }
})
export type AppDispatch=typeof store.dispatch;
export type RootState=ReturnType<typeof store.getState>;
export type AppStore=ReturnType<typeof configureStore>;
export type AppThunk<ReturnType=void>=ThunkAction<ReturnType,RootState,unknown,Action<string>>