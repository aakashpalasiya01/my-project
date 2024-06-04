"use client"
import { OrderDetailParamsType } from "@/component/Subscription/MySubscription/MySubType";
import * as API from "../serverApiAction/clientApis";
import { AppDispatch } from "../store";
import * as MySubReducer from "@/store/reducers/mySubReducer";


export const getSubDetails = () => async(dispatch:AppDispatch) => { 
    dispatch(MySubReducer.setSubLoading(true));
    const response = await API.post(`/wp-json/wp/v2/users/getsubscription/`,{});
    dispatch(MySubReducer.setSubDtl(response.data.data));
    dispatch(MySubReducer.setSubLoading(false));
}

export const getOrderDataDetails = async() => { 
    const response = await API.get(`/wp-json/wp/v2/users/subscriptions/?${new Date().toString()}`);
    return response;
};


export const getOrderDetails = async(params:OrderDetailParamsType) => {
    const response = await API.get(`/wp-json/wp/v2/users/payment-history/`,params);
    return response;
};

export const RecentOrdersAction = async() => {
    const response = await API.get(`/wp-json/wp/v2/users/payment-history/?${new Date().toString()}`);
    return response;
}