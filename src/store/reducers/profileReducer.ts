"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProfileInterface,InitialProfileState } from "@/component/Profile/ProfileType";
import Cookies from "js-cookie";
interface Image {
  image_id: number;
  image_url: string;
}
let Profile = null;
Profile = Cookies.get("user") ? Cookies.get("user") : null;

const initialState: InitialProfileState = {
  Profile : Profile ? JSON.parse(Profile) : "",
  isProfileLoaded: false,
  isProfileImageLoaded:false,
  Gallery:null,
};

export const ProfileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfileUpdate: (state, action: PayloadAction<ProfileInterface>) => {
      state.Profile = action.payload?.data.profileData;
      Cookies.set("user", JSON.stringify(action.payload?.data.profileData));
    },//index.tsx
    setLoader: (state, action: PayloadAction<boolean>) => {
        state.isProfileLoaded = action.payload;
    },
    setProfileImgLoader: (state, action: PayloadAction<boolean>) => {
      state.isProfileImageLoaded = action.payload;
  },
    
  },
});
export const { setProfileUpdate,setLoader,setProfileImgLoader} = ProfileSlice.actions;
// setgalleryImage,setgalleryImageRemover 
export default ProfileSlice.reducer;
