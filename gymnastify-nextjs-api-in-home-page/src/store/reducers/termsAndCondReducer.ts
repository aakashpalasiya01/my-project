"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialTAndCState,TandCDataType } from "@/component/TermsConditionComponent/TermsCondtiionsType";

const initialState:initialTAndCState = {
    termsNconditions:[],
    loadingState: false,
}

export const TermsAndCondSlice = createSlice({
    name: "tAndC",
    initialState,
    reducers:{
        setUpTandCData: (state,action:PayloadAction<TandCDataType[]>) => { 
            state.termsNconditions = action.payload;
        },
        setLoadingState: (state,action:PayloadAction<boolean>) => {
            state.loadingState = action.payload;
        }
    }
});

export const {setUpTandCData,setLoadingState} = TermsAndCondSlice.actions;
export default TermsAndCondSlice.reducer;
