"use client";
import { AppDispatch } from "../store";
import * as API from "../serverApiAction/clientApis";
import * as authReducer from "../reducers/authReducer";
import Cookies from "js-cookie";

export const refreshToken = async (dispatch: AppDispatch) => {
  const res: any = await API.get("/api/auth/refresh");

  if (res?.data?.accessToken) {
    Cookies.set("token", JSON.stringify(res.data.accessToken));
    dispatch(authReducer.refreshToken(res.data.accessToken));
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
    return response;
  };

export const registerAction = async (RegisterData: any) => {
  const response = await API.post("/wp-json/wp/v2/users/register",RegisterData);
  return response;
};

export const loginRegisterImage = () => async (dispatch: AppDispatch) => {
  const response = await API.get("/wp-json/wp/v2/theme-setting/slider_image");
  dispatch(authReducer.setSliderImage(response.data.slider_image));
};

export const logoutAction = (userId: any) => async (dispatch: AppDispatch) => {
  await API.get(
    `/wp-json/wp/v2/users/logout/?user_id=${userId}`
  );
  dispatch(authReducer.logout());
};

export const forgotPasswordAction = async (email: any) => {
  const response = await API.post("/wp-json/wp/v2/users/reset-password", email);
  return response;
};

export const resetPasswordAction = async (data: any) => {
  const response = await API.post(
    "/wp-json/wp/v2/users/change-password ",
    data
  );
  return response;
};

export const registerGroup = async() =>  {
  const response = await API.get("/wp-json/wp/v2/Group/");
  return response;
};


export const changePassword = async (data: any) =>  {
  const response = await API.post("/wp-json/wp/v2/users/change-password", data);
  return response.data;
};

export const emailVerify = async (activation_key: string) => {
  const response = await API.post("/wp-json/wp/v2/users/verify-account", { activation_key });
  return response.data;
}

export const getPlanProductList = () => async (dispatch: AppDispatch) => {
  const response = await API.get("/wp-json/wp/v2/product");
  if(response.success) dispatch(authReducer.setPlanProducts(response.data.data));
  return response.data;
}

export const setSubscriptionPlan = (body: any) => async (dispatch: AppDispatch) => {
  const response = await API.post("/wp-json/wp/v2/users/checkout/", body);
  dispatch(authReducer.setSubscriptionPlan(response.data));
  return response
}