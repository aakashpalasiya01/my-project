import { createSlice,PayloadAction } from "@reduxjs/toolkit";


const initialState={
    guesthome:[],
    WhatWeOffer:[],
    testimonials:[],
    needExpertGuidance:[],
    assignment:[],
    isLoading:false
}

export const homeSlice =createSlice({
      name:'home',
      initialState,
      reducers:{
         setGuest:(state,action)=>{
            state.guesthome=action.payload
         },
         setWhatWeOffer:(state,action)=>{
            state.WhatWeOffer=action.payload
         },
         setTestimonials:(state,action)=>{
            state.testimonials=action.payload
         },
         setneedExpertGuidance:(state,action)=>{
            state.needExpertGuidance=action.payload
         },
         setassignment:(state,action)=>{
            state.assignment=action.payload
         },
         setLoading:(state,action)=>{
            state.assignment=action.payload
         }
      }

})
export const  {setGuest,setWhatWeOffer,setTestimonials,setneedExpertGuidance,setassignment,setLoading}=homeSlice.actions
export default homeSlice.reducer
