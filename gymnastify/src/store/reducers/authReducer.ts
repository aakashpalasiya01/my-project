"use client"
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { AuthState, LoginRes, ProductType, SubscribeResponseType,SliderImageList,WhatWeOfferInterface,SingleSkillGrp  } from "@/types/authType";

let token = null;
let refresh_token = null;
let user = null;
let subscription = null;
token = Cookies.get("token") ? Cookies.get("token") : null;
user = Cookies.get("user") ? Cookies.get("user") : null;
subscription = Cookies.get("subscription") ? Cookies.get("subscription") : null;

const initialState: AuthState = {
  token: token ?? "",
  refresh_token: refresh_token ?? "",
  user: user ? JSON.parse(user) : "",
  isLoaded: false,
  ImageLoader: false,
  Group: [],
  ImageSlider: [],
  whatWeOfferList:[],
  productList: [],
  subscription: subscription ?JSON.parse(subscription) : null
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<LoginRes>) => { 
      const { subscription: subscriptionData, ...restUserData } = {...action.payload.data};
      Cookies.set("token", action.payload.token);
      Cookies.set("refresh_token", "asd");
      Cookies.set("user", JSON.stringify(restUserData));
      Cookies.set("subscription", JSON.stringify(subscriptionData));

      state.token = action.payload.token;
      state.user = restUserData;
      state.refresh_token = action.payload.refresh_token;
      state.subscription = subscriptionData || null;
    },
    logout: (state) => {
      Cookies.remove("token");
      Cookies.remove("refresh_token");
      Cookies.remove("user");
      Cookies.remove("subscription");
      localStorage.clear();
      state.token = "";
      state.refresh_token = "";
      state.user = undefined;
      state.subscription = null;
    },
    refreshToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    // setregisteredData: (state, action: PayloadAction<any>) => {
    //   state.user = action.payload;
    //   Cookies.set("user", JSON.stringify(action.payload));
    // },//Not dispatched in single file
    setLoader: (state, action: PayloadAction<boolean>) => {
      state.isLoaded = action.payload;
    },//forgetpasswordForm.tsx,LoginSlider.tsx,ResetPasswordForm.tsx
    setLoaderImage (state, action: PayloadAction<boolean>){
      state.ImageLoader = action.payload;
    },//Loginslider.tsx
    setSliderImage: (state, action: PayloadAction<SliderImageList>) => {
      state.ImageSlider = action.payload;
    },//authAction.ts
    whatWeOffer: (state, action: PayloadAction<WhatWeOfferInterface []>) => {
      state.whatWeOfferList = action.payload;
    },//index2.tsx
    setRegisterGroup: (state, action: PayloadAction<SingleSkillGrp[]>) => {
      state.Group = action.payload;
    },//KidInfo.tsx
    setPlanProducts: (state, action: PayloadAction<ProductType[]>) => {
      state.productList = action.payload;
    },//authAction.ts
    setSubscriptionPlan: (state, action: PayloadAction<SubscribeResponseType>) => {
      state.subscription = action.payload;
      Cookies.set("subscription", JSON.stringify(action.payload));
    },//CheckoutFormModal.tsx
    setCancelSubscriptionPlan: (state, action: PayloadAction<SubscribeResponseType>) => {
      state.subscription = action.payload;
      Cookies.set("subscription", JSON.stringify(action.payload));
    },//CheckoutFormModal.tsx
    setProfileUpdate: (state,action:PayloadAction<any>)=>{ 
      Cookies.set("user", JSON.stringify(action.payload));
      state.user = action.payload;
    },   setregisteredData: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
      Cookies.set("user", JSON.stringify(action.payload));
    },
},
});
export const { login, logout, refreshToken, setLoaderImage, setLoader,setSliderImage , whatWeOffer,setRegisterGroup, setCancelSubscriptionPlan, setPlanProducts, setregisteredData,setSubscriptionPlan,setProfileUpdate } =
  authSlice.actions;

export default authSlice.reducer;
