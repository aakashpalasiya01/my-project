"use client"
import * as API from "../serverApiAction/clientApis";
import { AppDispatch } from "../store";
import * as TermsAndConditionsReducer from "../reducers/termsAndCondReducer"



export const getTermsAndCondData = () => async(dispatch:AppDispatch) => {   
    const response = await API.get('/wp-json/wp/v2/pages?slug=terms-conditions'); 
    dispatch(TermsAndConditionsReducer.setUpTandCData(response.data));
    
    return response.data;
}; 