"use client"
import { Instructors, InstructorsInitialState } from "@/component/TeachersComponent/TeacherType";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState: InstructorsInitialState = {
  TeachersData:[],
  isLoaded:false,
};

export const teachersSlice = createSlice({
  name: "teachers",
  initialState,
  reducers: {
    setTeacherData: (state, action: PayloadAction<Instructors[]>) => {
      state.TeachersData = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoaded = action.payload;
    }
},
});
export const { setTeacherData, setLoading } = teachersSlice.actions;

export default teachersSlice.reducer;
