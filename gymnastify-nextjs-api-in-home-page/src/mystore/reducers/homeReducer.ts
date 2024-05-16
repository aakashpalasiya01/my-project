'use client'
import { InitialHomeState } from "@/types/HomeType";
import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import {GuesthomeDataType,WhatWeOfferDataType,TestimonialDataType,NeedExpertGuidanceDataType,AssignmentDataType} from '@/types/HomeType'

const initialState:InitialHomeState={
    guesthome:null,
    WhatWeOffer:[],
    testimonialsData:[],
    needExpertGuidance:null,
    assignment:null,
}

export const homeSlice =createSlice({
      name:'home',
      initialState,
      reducers:{
         setGuest:(state,action:PayloadAction<GuesthomeDataType>)=>{
            state.guesthome=action.payload
         },
         setWhatWeOffer:(state,action:PayloadAction<WhatWeOfferDataType[]>)=>{
            state.WhatWeOffer=action.payload
         },
         setTestimonials:(state,action:PayloadAction<TestimonialDataType[]>)=>{
            state.testimonialsData=action.payload
         },
         setneedExpertGuidance:(state,action:PayloadAction<NeedExpertGuidanceDataType>)=>{
            state.needExpertGuidance=action.payload
         },
         setassignment:(state,action:PayloadAction<AssignmentDataType>)=>{
            state.assignment=action.payload
         },
       
      }

})
export const  {setGuest,setWhatWeOffer,setTestimonials,setneedExpertGuidance,setassignment}=homeSlice.actions
export default homeSlice.reducer
