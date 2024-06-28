"use client";
import {  InitialStateWatchList, WatchlistItem } from "@/component/WatchListComponent/WatchListType";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: InitialStateWatchList = {
    WatchListClasses:[],
    isLoaded: false,
};

export const WatchList = createSlice({
  name: "watchlist",
  initialState,
  reducers: {
    setWatchListClasses: (state, action: PayloadAction<WatchlistItem[]>) => {
        state.WatchListClasses = action.payload;
    },
    setLoader:(state, action: PayloadAction<boolean>) => {
        state.isLoaded = action.payload; 
    },
    setWListWatchlistStatus: (state, action: PayloadAction<string>) => {
      state.WatchListClasses= state.WatchListClasses.filter((item:any) => item?.class_id !== action.payload)
    },
  setWListFaviroteStatus(state, action: PayloadAction<{ class_id: string; favorite: boolean }>) {
    const index = state.WatchListClasses.findIndex(c => c.class_id === action.payload.class_id);
    if (index !== -1) {
      state.WatchListClasses[index].favorite = !state.WatchListClasses[index].favorite;
    }
},
  },
});
export const {setLoader,setWatchListClasses,setWListWatchlistStatus,setWListFaviroteStatus} = WatchList.actions;

export default WatchList.reducer;
