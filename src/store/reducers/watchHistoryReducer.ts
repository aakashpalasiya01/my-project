"use client"
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialHistoryType,WatchDataType } from "../../component/WatchHistory/WatchHistoryType";

const initialState:InitialHistoryType = {
    watchHistoryList:[],
    isLoaded:false,
};

export const WatchHistorySlice = createSlice({
    name:"watch",
    initialState,
    reducers:{
        setUpdateHistoryData:  (state, action: PayloadAction<WatchDataType[]>) => {
            state.watchHistoryList = action.payload;
        },
        setHistoryRemoval: (state, action: PayloadAction<string>)=>{ 
            state.watchHistoryList= state.watchHistoryList.filter((item) => item?.id !== action.payload);
        },
        setLoader: (state, action: PayloadAction<boolean>) => {
            state.isLoaded = action.payload;
        }
    }
});

export const {setUpdateHistoryData,setHistoryRemoval,setLoader} = WatchHistorySlice.actions;

export default WatchHistorySlice.reducer;