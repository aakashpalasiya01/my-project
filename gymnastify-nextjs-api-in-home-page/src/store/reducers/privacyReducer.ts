"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialPolicyType, PolicyDataType } from "@/component/PrivacyPolicyComponent/PrivacyPolicyType";

const initialState:initialPolicyType = {
    privacyPolicy:[],
    loadingState: false,
};

export const PrivacySlice = createSlice({
    name:'privacy',
    initialState,
    reducers:{
     setUpdatePolicy :(state,action:PayloadAction<PolicyDataType[]>) => { 
        state.privacyPolicy = action.payload;
     },
     setLoader: (state,action:PayloadAction<boolean>) => {
        state.loadingState = action.payload
    }
    },
    
});

export const {setUpdatePolicy,setLoader} = PrivacySlice.actions;

export default PrivacySlice.reducer;