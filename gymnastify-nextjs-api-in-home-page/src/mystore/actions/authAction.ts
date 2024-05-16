"use client";
import { AppDispatch } from "../store";
import * as API from "../serverApiAction/clientApis";
import * as AuthReducers from '../reducers/authReducer'
import Cookies from "js-cookie";




export const refreshToken = async (dispatch: AppDispatch) => {
  const res: any = await API.get("/api/auth/refresh");

  if (res?.data?.accessToken) {
    Cookies.set("token", JSON.stringify(res.data.accessToken));
    dispatch(AuthReducers.refreshToken(res.data.accessToken));
    return res.data;
  } else if (res === "token has expired") {
    dispatch({ type: "auth/logout" });
  } else {
    dispatch({ type: "auth/logout" });
  }
  return {
    access_token: "asdasdd",
  };
};


export const loginAction = (LoginData: any) => async (dispatch: AppDispatch) => {
    const response = await API.post("/wp-json/jwt-auth/v1/token", LoginData);
    dispatch(AuthReducers.login(response))

    return response.data;
  };

  export const logoutAction = (userId: any) => async (dispatch: AppDispatch) => {
    await API.get(
      `/wp-json/wp/v2/users/logout/?user_id=${userId}`
    );
    dispatch(AuthReducers.logout());
  };
  
  export const groupOption = () => async (dispatch:AppDispatch ) => {
    const response = await API.get("/wp-json/wp/v2/group");

   let res= dispatch(AuthReducers.setRegisterGroup(response.data));
    console.log(res)
    return response.data;
  };


export const registerData = (data:any) => async (dispatch: AppDispatch) => {
  const response = await API.post("/wp-json/wp/v2/users/register",data);
  
  dispatch(AuthReducers.setregisteredData(response.data));
  return response.data;
};