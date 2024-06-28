"use client"
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {AboutUsDataType,InitialAboutUsState} from "@/component/AboutUsComponent/AboutUsType";

const initialState:InitialAboutUsState = {
   aboutUs:[],
   loadingState:false
};

const AboutUsSlice = createSlice({
    name:"aboutus",
    initialState,
    reducers:{
        setAboutUsData:(state,action:PayloadAction<AboutUsDataType[]>)=>{
            state.aboutUs = action.payload;
        },
        setLoadingState:(state,action:PayloadAction<boolean>) => {
            state.loadingState = action.payload;
        }
    }
});

export const {setAboutUsData,setLoadingState} = AboutUsSlice.actions;
export default AboutUsSlice.reducer;