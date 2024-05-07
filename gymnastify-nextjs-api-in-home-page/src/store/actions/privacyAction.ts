"use client"
import * as API from "../serverApiAction/clientApis";
import { AppDispatch } from "../store";
import * as PrivacyReducer from "../reducers/privacyReducer";

export const getPrivacyData = () => async(dispatch:AppDispatch) => {  
    const response = await API.get('/wp-json/wp/v2/pages?slug=privacy-policy');
     dispatch(PrivacyReducer.setUpdatePolicy(response.data))
    return response.data;
}; 

