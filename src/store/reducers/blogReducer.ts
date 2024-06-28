"use client"
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BlogDataType,InitialBlogStateType } from "@/component/BlogComponent/BlogType";

const initialState:InitialBlogStateType = {
    BlogDataList:[],
    loadingState: false,
    loadingClassesState:false,
};

const BlogSlice = createSlice({
    name:'blog',
    initialState,
    reducers:{
        setGetBlogData:(state,action:PayloadAction<BlogDataType[]>) => { 
            state.BlogDataList = action.payload;
        },
        setLoadingState:(state,action:PayloadAction<boolean>)=>{
            state.loadingState = action.payload;
        },
        setLoadingClassesState:(state,action:PayloadAction<boolean>)=>{
            state.loadingClassesState = action.payload;
        }
    }
});

export const {setGetBlogData,setLoadingState,setLoadingClassesState} = BlogSlice.actions;
export default BlogSlice.reducer;

