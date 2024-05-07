import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { AuthState, LoginRes, SignupRes } from "@/types/authType";
import { storage } from "@/utils/constant";

let token = null
let refresh_token = null
let user = null

token = Cookies.get("token");

const initialState: AuthState = {
  token: token ? token : '',
  refresh_token: refresh_token || "",
  user: user ? JSON.parse(user) : undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<LoginRes>) => {
      Cookies.set("token", action.payload.access_token);
      Cookies.set("refresh_token", "asd");
      Cookies.set("user", JSON.stringify(action.payload.user));
      state.token = action.payload.access_token;
      state.user = action.payload.user;
      state.refresh_token = action.payload.refresh_token;
    },
    signup: (state, action: PayloadAction<SignupRes>) => {

    },
    logout: (state) => {
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
    }
  },
});
export const { login, signup, logout, refreshToken } = authSlice.actions;

export default authSlice.reducer;
