"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
interface Image {
  image_id: number;
  image_url: string;
}
let Profile = null;
Profile = Cookies.get("user") ? Cookies.get("user") : null;

const initialState: any = {
  Profile : Profile ? JSON.parse(Profile) : "",
  isProfileLoaded: false,
  Gallery:null,
};

export const ProfileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfileUpdate: (state, action: PayloadAction<any>) => {
      state.Profile = action.payload?.data.profileData;
      Cookies.set("user", JSON.stringify(action.payload?.data.profileData));
    },
    setLoader: (state, action: PayloadAction<boolean>) => {
        state.isProfileLoaded = action.payload;
    },
    setgalleryImage: (state, action: PayloadAction<any>) => {
        state.Gallery = Object.values(action.payload);
    },
    setgalleryImageRemover: (state, action: PayloadAction<number>) => {
      state.Gallery = state.Gallery.filter((item: any) => item.image_id !== action.payload);
    }
    
  },
});
export const { setProfileUpdate,setLoader,setgalleryImage,setgalleryImageRemover } = ProfileSlice.actions;

export default ProfileSlice.reducer;
