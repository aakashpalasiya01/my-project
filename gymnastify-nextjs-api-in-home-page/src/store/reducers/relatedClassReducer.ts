"use client"
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {initialRelatedClassStateType,relatedClassesListType} from "@/component/SingleClass/RelatedClassType";

const initialState:initialRelatedClassStateType = {
    relatedClassesList: [],
    loadingState: false,
};

export const relatedClassSlice = createSlice({
    name:"relatedClass",
    initialState,
    reducers:{
        setUpdateRelatedClassList: (state,action:PayloadAction<relatedClassesListType[]>)=>{
            state.relatedClassesList = action.payload;
        },
        setLoadingState: (state,action:PayloadAction<boolean>) => {
            state.loadingState = action.payload;
        }
    }
});

export const {setUpdateRelatedClassList,setLoadingState} = relatedClassSlice.actions;
export default relatedClassSlice.reducer; 