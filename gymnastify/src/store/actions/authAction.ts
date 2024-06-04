"use client";
import { AppDispatch } from "../store";
import * as API from "../serverApiAction/clientApis";
import * as authReducer from "../reducers/authReducer";
import Cookies from "js-cookie";
import{AddStripCardBodyType, SubscribeResponseType, setCardDataBodyType} from "@/types/authType";
import { revalidateAllLayout } from "@/utils/RevalidateService";
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
export const groupOption = () => async (dispatch:AppDispatch ) => {
  const response = await API.get("/wp-json/wp/v2/group");

 let res= dispatch(authReducer.setRegisterGroup(response.data));

  return response.data;
};
export const loginAction = (LoginData: any) => async (dispatch: AppDispatch) => {
  const response = await API.post("/wp-json/jwt-auth/v1/token", LoginData);
  dispatch(authReducer.login(response.data))

  return response.data;
};

export const registerAction = async (RegisterData: FormData) => {
  const response = await API.post("/wp-json/wp/v2/users/register",RegisterData);
  return response.data;
};


export const registerData = (data:any) => async (dispatch: AppDispatch) => {
  const response = await API.post("/wp-json/wp/v2/users/register",data);
  
  dispatch(authReducer.setregisteredData(response.data));
  return response.data;
};

export const loginRegisterImage = () => async (dispatch: AppDispatch) => { 
  const response = await API.get("/wp-json/wp/v2/theme-setting/slider_image");
  dispatch(authReducer.setSliderImage(response.data.slider_image));
};
export const logoutAction = (userId: string | number) => async (dispatch: AppDispatch) => {
  try { 
    await API.get(
      `/wp-json/wp/v2/users/logout/?user_id=${userId}&${new Date().getTime().toString()}`
    );
    dispatch(authReducer.logout());
  } catch {
    dispatch(authReducer.logout());
  }
};
export const forgotPasswordAction = async (email: FormData) => {
  const response = await API.post("/wp-json/wp/v2/users/reset-password", email);
  return response;
};
export const resetPasswordAction = async (data: FormData) => {
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
export const changePassword = async (data: FormData) =>  { 
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
export const setSubscriptionPlan = (body: setCardDataBodyType) => async ( dispatch: AppDispatch ) => {
  const response = await API.post("/wp-json/wp/v2/users/checkout/", body);
  const subscription = response.data.data.subscription;
  dispatch(authReducer.setSubscriptionPlan(subscription));
  revalidateAllLayout();
  return subscription;
}

export const CancelSubscription = (body: { subscription_id: string | undefined }) => async ( dispatch: AppDispatch ) => {
  const response = await API.post("/wp-json/wp/v2/users/cancel-subscription/", body);
  const subscription: any = response.data.data.subscription;

  const cancelSubscription: SubscribeResponseType = {
    id: subscription.id,
    current_period_end: subscription.current_period_end,
    current_period_start: subscription.current_period_start,
    customer: subscription.customer,
    paused: subscription.paused,
    status: subscription.status,
    plan: {
      id: subscription.plan.id,
      interval: subscription.plan.interval,
      product: subscription.plan.product,
      trial_period_days: subscription.plan.trial_period_days,
      price: subscription.plan.amount
    }
  }

  dispatch(authReducer.setCancelSubscriptionPlan(cancelSubscription));
  revalidateAllLayout();
  return response;
}

export const PausedSubscription = async (body:{subscription_id: string | undefined }) => {
  const response = await API.post("/wp-json/wp/v2/users/pause-subscription/", body);
  return response;
}
export const ResumeSubscription = async (body:{subscription_id: string | undefined }) => {
  const response = await API.post("/wp-json/wp/v2/users/subscription/resume", body);
  return response;
}

export const AddStripCard = async (body: AddStripCardBodyType) => {
  return await API.post("/wp-json/wp/v2/users/payment-method/add/", body);
}

export const deleteStripCard = async (body: any) => {
  return await API.post("/wp-json/wp/v2/users/payment-method/remove/", body);
}

export const defaultStripCard = (body: AddStripCardBodyType) => API.post("/wp-json/wp/v2/users/payment-method/set-default/", body);