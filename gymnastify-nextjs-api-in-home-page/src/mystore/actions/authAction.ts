"use client";
import { AppDispatch } from "../store";
import * as API from "../serverApiAction/clientApis";
import * as AuthReducers from '../reducers/authReducer'


export const loginAction = (LoginData: any) => async (dispatch: AppDispatch) => {
    const response = await API.post("/wp-json/jwt-auth/v1/token", LoginData);
    dispatch(AuthReducers.setlogin(response.data))

    return response.data;
  };
