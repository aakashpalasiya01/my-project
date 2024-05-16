'use client'
import * as registerReducer from '../reducers/registerReducer'
import * as API from "../../../src/mystore/serverApiAction/clientApis";
import { RegisterDataType } from '.../../../src/component/Registernow/Registertype';
import { AppDispatch } from '../store';



export const groupOption = () => async (dispatch:AppDispatch ) => {
    const response = await API.get("/wp-json/wp/v2/group");

   let res= dispatch(registerReducer.setGroup(response.data));
    console.log(res)
    return response.data;
  };


export const registerData = (data:any) => async (dispatch: AppDispatch) => {
  const response = await API.post("/wp-json/wp/v2/users/register",data);
  
  dispatch(registerReducer.setRegister(response.data));
  return response.data;
};