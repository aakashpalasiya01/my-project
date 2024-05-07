"use client"
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { initialSingleClassState, SingleClassDataType} from "@/component/SingleClass/SingleClassType";

const initialState: initialSingleClassState = {
    SingleClassData:{
        class_id: 0,
        title: "",
        content: "",
        class_url: "",
        image: {
            normalImage: "",
            retinaImage: ""
        },
        instructors: [],
        level_skills: [],
        group: [],
        usag_level: [],
        props: [],
        vimeo_data: {
            video_id: "",
            video_length: "",
            pictures: "",
            preview_video: ""
        },
        favorite: false,
        watchlist: false
    },
    loadingState: false,
};

export const singleClassSlice = createSlice({
    name:"singleClass",
    initialState,
    reducers:{
        setUpdateSingleClass : (state,action:PayloadAction<SingleClassDataType>) => {
            state.SingleClassData = action.payload
        },
        setLoadingState : (state,action:PayloadAction<boolean>) => {
            state.loadingState = action.payload
        }
    }
});

export const {setUpdateSingleClass,setLoadingState} = singleClassSlice.actions;
export default singleClassSlice.reducer;