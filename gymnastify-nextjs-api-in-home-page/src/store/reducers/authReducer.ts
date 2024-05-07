"use client"
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { AuthState, LoginRes, ProductType, SignupRes, SubscribeResponseType } from "@/types/authType";

let token = null;
let refresh_token = null;
let user = null;
let subscription = null;
token = Cookies.get("token") ? Cookies.get("token") : null;
user = Cookies.get("user") ? Cookies.get("user") : null;
subscription = Cookies.get("subscription") ? Cookies.get("subscription") : null;

const initialState: AuthState = {
  token: token ? token : "",
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
      Cookies.set("token", action.payload.token);
      Cookies.set("refresh_token", "asd");
      Cookies.set("user", JSON.stringify(action.payload.data));
      state.token = action.payload.token;
      state.user = action.payload.data;
      state.refresh_token = action.payload.refresh_token;
    },
    logout: (state :RootState) => {
      Cookies.remove("token");
      Cookies.remove("refresh_token");
      Cookies.remove("user");
      localStorage.clear();
      state.token = "";
      state.refresh_token = "";
      state.user = undefined;
    },
    refreshToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setregisteredData: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
      Cookies.set("user", JSON.stringify(action.payload));
    },
    setLoader: (state, action: PayloadAction<boolean>) => {
      state.isLoaded = action.payload;
    },
    setLoaderImage (state, action: PayloadAction<boolean>){
      state.ImageLoader = action.payload;
    },
    setSliderImage: (state, action: PayloadAction<any>) => {
      state.ImageSlider = action.payload;
    },
    whatWeOffer: (state, action: PayloadAction<any>) => {
      state.whatWeOfferList = action.payload;
    },
    setRegisterGroup: (state, action: PayloadAction<any>) => {
      state.Group = action.payload;
    },
    setPlanProducts: (state, action: PayloadAction<ProductType[]>) => {
      state.productList = action.payload;
    },
    setSubscriptionPlan: (state, action: PayloadAction<SubscribeResponseType>) => {
      state.subscription = action.payload;
      Cookies.set("subscription", JSON.stringify(action.payload));
    },
},
});
export const { login, logout, refreshToken, setLoaderImage, setLoader,setSliderImage , whatWeOffer,setRegisterGroup, setregisteredData, setPlanProducts, setSubscriptionPlan } =
  authSlice.actions;

export default authSlice.reducer;
