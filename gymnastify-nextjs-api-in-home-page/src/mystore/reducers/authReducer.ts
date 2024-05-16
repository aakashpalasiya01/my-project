"use client"
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { AuthState} from "@/types/authType";
import {LoginRes} from '../types/authType'

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

};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setlogin: (state, action: PayloadAction<LoginRes>) => {
      Cookies.set("token", action.payload.token);
      Cookies.set("refresh_token", "asd");
      Cookies.set("user", JSON.stringify(action.payload.data));
      state.token = action.payload.token;
      state.user = action.payload.data;
      state.refresh_token = action.payload.refresh_token;
    },

},
});
export const { setlogin } =
  authSlice.actions;

export default authSlice.reducer;
