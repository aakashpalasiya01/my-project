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
       setChangeLoadingState: (state,action:PayloadAction<boolean>)=>{
            state.loadingState = action.payload;
        },
        setFavPageWatchlistStatus(state, action: PayloadAction<{ class_id: string|number; watchlist: boolean }>) {
            const index = state.favoriteList.findIndex(c => c.class_id === action.payload.class_id);
            if (index !== -1) {
              state.favoriteList[index].watchlist = !state.favoriteList[index].watchlist;
            }
        },
        setRemoveFavStatus: (state, action: PayloadAction<string|number>) => {
            state.favoriteList= state.favoriteList.filter((item:any) => item?.class_id !== action.payload)
          },
        
    }
});

export const {setUpdateFavItems,setAddFavItem,setChangeLoadingState,setFavPageWatchlistStatus,setRemoveFavStatus} = favoriteSlice.actions;
export default favoriteSlice.reducer;

