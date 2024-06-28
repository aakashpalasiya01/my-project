"use client";


import { ExploreCard, RegisterClassTs, RegisteredReducersType, RegisterLevel} from '../../types/RegisterTypes'
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: RegisteredReducersType = {
  RegisterLevel: {
    level: {
      term_id:0,
      name: "",
      slug: "",
      term_group:0,
      term_taxonomy_id:0,
      taxonomy: "",
      description: "",
      parent:0,
      count:0,
      filter: "",
      meta: {
        image: "",
        label_name: "",
      },
    },
    skills: [],
  },
  Registerbanner:{},
  RegisterClasses:{
    classes: [],
    current_page: 0,
    total_classes: 0,
    total_pages: 0,
  },
  ExploreCard: [],
  Loaded: false,
  LoadedClasses: false,
  LoadedRegisterBanner: false,
  RegVideoLoader:false,
  LevelSkill:'',
};

export const RegisteredSlice = createSlice({
  name: "registered",
  initialState,
  reducers: {
    setRegisterlevels: (state, action: PayloadAction<RegisterLevel>) => {
      state.RegisterLevel = action.payload;
    },
    setRegisterbanner: (state, action: PayloadAction<RegisteredReducersType>) => {
      state.Registerbanner = action.payload;
    },
    setSkill: (state, action: PayloadAction<string>) => {
      state.LevelSkill = action.payload;
    },
    setRegisterClasses: (state, action: PayloadAction<RegisterClassTs>) => {
      state.RegisterClasses = action.payload;
    },
  
    setExploreCard: (state, action: PayloadAction<ExploreCard[]>) => {
      state.ExploreCard = action.payload;
    },
    setLoader: (state, action: PayloadAction<boolean>) => {
      state.Loaded = action.payload;
    },
    setLoadedRegisterBanner: (state, action: PayloadAction<boolean>) => {
      state.LoadedRegisterBanner = action.payload;
    },
    setClassesLoader: (state, action: PayloadAction<boolean>) => {
      state.LoadedClasses = action.payload;
    },
    setRegVideoLoader: (state,action:PayloadAction<boolean>)=>{
      state.RegVideoLoader = action.payload;
    },
    setRegisterWatchlistStatus(state, action: PayloadAction<{ class_id: number; watchlist: boolean }>) {
      const index = state.RegisterClasses.findIndex(c => c.class_id === action.payload.class_id);
      if (index !== -1) {
        state.RegisterClasses[index].watchlist = !state.RegisterClasses[index].watchlist;
      }
  },
  setRegisterFaviroteStatus(state, action: PayloadAction<{ class_id: number; favorite: boolean }>) {
    const index = state.RegisterClasses.findIndex(c => c.class_id === action.payload.class_id);
    if (index !== -1) {
      state.RegisterClasses[index].favorite = !state.RegisterClasses[index].favorite;
    }
},
  },
});
export const {
  setRegisterlevels,
  setRegisterClasses,
  setLoader,
  setExploreCard,
  setClassesLoader,
  setLoadedRegisterBanner,
  setRegVideoLoader,
  setRegisterbanner,
  setRegisterWatchlistStatus,
  setRegisterFaviroteStatus,
  setSkill
} = RegisteredSlice.actions;

export default RegisteredSlice.reducer;
