"use client"
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { FavData, InitialFavType } from "@/component/Favourite/FavouriteType";

const initialState:InitialFavType = {
    favoriteList:[],
    loadingState: false
};

export const favoriteSlice = createSlice({
    name:"favorite",
    initialState,
    reducers:{
        setUpdateFavItems: (state,action:PayloadAction<FavData[]>)=>{ 
            state.favoriteList = action.payload;
        },
        setAddFavItem:(state,action:PayloadAction<FavData>)=>{
            state.favoriteList = [...state.favoriteList,action.payload]
        },
        setRemoveFavItem: (state,action:PayloadAction<number>)=>{
            state.favoriteList = state.favoriteList.filter((item:FavData)=>item?.class_id !== action.payload)
        },
        setChangeLoadingState: (state,action:PayloadAction<boolean>)=>{
            state.loadingState = action.payload;
        },
    }
});

export const {setUpdateFavItems,setAddFavItem,setRemoveFavItem,setChangeLoadingState} = favoriteSlice.actions;
export default favoriteSlice.reducer;

