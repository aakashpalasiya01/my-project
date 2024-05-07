"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {
    WatchListUserSkills :[],
    WatchListClasses:[],
    isLoaded: false,
};

export const WatchList = createSlice({
  name: "watchlist",
  initialState,
  reducers: {
    setWatchListSkills: (state, action: PayloadAction<any>) => {
        state.WatchListUserSkills = action.payload;
    },
    setWatchListClasses: (state, action: PayloadAction<any>) => {
        state.WatchListClasses = action.payload;
    },
    setLoader:(state, action: PayloadAction<boolean>) => {
        state.isLoaded = action.payload; 
    },
    setRemoveClass: (state, action: PayloadAction<any>) => {
      state.WatchListClasses= state.WatchListClasses.filter((item:any)=> item?.class_id !== action.payload)
    }
  },
});
export const {setWatchListSkills,setLoader,setWatchListClasses,setRemoveClass} = WatchList.actions;

export default WatchList.reducer;
