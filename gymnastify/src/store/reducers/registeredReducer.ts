"use client";
import {
  ClassesDataType,
  RegisteredReducersType,
  levelSkills,
  RegsiterBanner,
} from "@/component/Home/Register";
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
  RegisterClasses: [],
  ExploreCard: [],
  Loaded: false,
  LoadedClasses: false,
  LoadedRegisterBanner: false,
  RegVideoLoader:false,
};

export const RegisteredSlice = createSlice({
  name: "registered",
  initialState,
  reducers: {
    setRegisterlevels: (state, action: PayloadAction<levelSkills>) => {
      state.RegisterLevel = action.payload;
    },
    setRegisterClasses: (state, action: PayloadAction<ClassesDataType[]>) => {
      state.RegisterClasses = action.payload;
    },
    setSearchClasses: (state, action: PayloadAction<ClassesDataType[]>) => {
      state.RegisterClasses = action.payload;
    },
    setExploreCard: (state, action: PayloadAction<RegsiterBanner>) => {
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
  setSearchClasses,
  setLoadedRegisterBanner,
  setRegVideoLoader,
  setRegisterWatchlistStatus,
  setRegisterFaviroteStatus
} = RegisteredSlice.actions;

export default RegisteredSlice.reducer;
