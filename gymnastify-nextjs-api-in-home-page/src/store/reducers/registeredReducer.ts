"use client";
import { ClassesDataType, RegisteredReducersType, levelSkills, RegsiterBanner } from "@/component/Home/Register";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: RegisteredReducersType = {
 RegisterLevel:[],
 RegisterClasses:[],
 ExploreCard:[],
 Loaded: false,
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
  },
});
export const { setRegisterlevels,setRegisterClasses, setLoader ,setExploreCard, setSearchClasses} = RegisteredSlice.actions;

export default RegisteredSlice.reducer;
