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
        },
        setRelatedClassWatchlistStatus(state, action: PayloadAction<{ class_id: string|number; watchlist: boolean }>) { 
            const index = state.relatedClassesList.findIndex(c => c.class_id === action.payload.class_id);
            if (index !== -1) {
              state.relatedClassesList[index].watchlist = !state.relatedClassesList[index].watchlist;
            }
        },
        setRelatedClassFaviroteStatus(state, action: PayloadAction<{ class_id: string|number; favorite: boolean }>) { 
            const index = state.relatedClassesList.findIndex(c => c.class_id === action.payload.class_id);
            if (index !== -1) {
              state.relatedClassesList[index].favorite = !state.relatedClassesList[index].favorite;
            }
        },
    }
});

export const {setUpdateRelatedClassList,setLoadingState,setRelatedClassWatchlistStatus,setRelatedClassFaviroteStatus} = relatedClassSlice.actions;
export default relatedClassSlice.reducer; 