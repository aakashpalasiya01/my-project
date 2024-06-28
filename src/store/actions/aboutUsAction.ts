"use client"
import * as API from "../serverApiAction/clientApis";
import { AppDispatch } from "../store";
import * as aboutUsReducer from "@/store/reducers/aboutUsReducer";

export const getAboutUsData = () => async(dispatch:AppDispatch)=>{
    const response = await API.get('/wp-json/wp/v2/pages?slug=about-us');
    dispatch(aboutUsReducer.setAboutUsData(response.data));
    return response.data;
}