"use client";
import { AppDispatch } from "../store";
import * as API from "../serverApiAction/clientApis";
import { AddFaviroteprops, WatchListPagination } from "@/component/WatchListComponent/WatchListType";


export const addFavirote = async(class_Id:string,user_id:number|undefined|null) => {
    const response = await API.post(`/wp-json/wp/v2/users/favorite/add?class_id=${class_Id}&user_id=${user_id}&${new Date().getTime().toString()}`,{});
    return response;
}
export const removeFavirote = async(class_Id:string,user_id:number|undefined|null) => {
    const response = await API.del(`/wp-json/wp/v2/users/favorite/remove?user_id=${user_id}&class_id=${class_Id}&${new Date().getTime().toString()}`);
    return response;
}
export const closeWatchList = async(params:any) => {
    const response = await API.del(`/wp-json/wp/v2/users/watchlist/remove/`, params);
    return response;
}
export const watchListSkills = async(user_id: number | string) => {
    const response = await API.get(`/wp-json/wp/v2/skill_dictionary/?user_id=${user_id}`);
    return response.data.data;
}

export const watchListClassesAction = async(params:any) => {
    const response = await API.get(`/wp-json/wp/v2/users/watchlist/?${new Date().getTime().toString()}`, params);
    return response.data.data;
}

export const watchListClassesActionDirect = async(user_id:any) => {
    const response = await API.get(`/wp-json/wp/v2/users/watchlist/?user_id=${user_id}&${new Date().getTime().toString()}`);
    console.log(response.data.data);
    return response.data.data;
}

export const watchListFliterClasses = async(params:any) => {
    const response = await API.get(`/wp-json/wp/v2/users/watchlist/`, params);
    console.log(response.data.data);
    return response.data.data;
}