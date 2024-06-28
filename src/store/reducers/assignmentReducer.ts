"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AssignmentState, Assignment, AssignmentDetailDataTypes } from "@/types/AssignmentTypes";
const initialState: AssignmentState = {
  beginners: {
    assignments: [],
  },
assignmentDetail:[],
};
export const assignmentSlice = createSlice({
  name: "assignment",
  initialState,
  reducers: {
    setBeginners: (state, action: PayloadAction<Assignment[]>) => {
      state.beginners.assignments = action.payload;
    },
    setAssignmentDetails: (state, action: PayloadAction<AssignmentDetailDataTypes[]>) => {
      state.assignmentDetail = action.payload;
    },
  },
});
export const { setBeginners,setAssignmentDetails } = assignmentSlice.actions;
export default assignmentSlice.reducer;












