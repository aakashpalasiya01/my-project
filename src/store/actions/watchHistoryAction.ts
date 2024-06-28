"use client"
import * as API from "../serverApiAction/clientApis";

export const GetWatchHistoryData = async(user_id:string|number|undefined) => { 
    const response = await API.get(`/wp-json/wp/v2/users/history?user_id=${user_id}&${new Date().toString()}`);
    return response
}

export const RemoveWatchHistory = async(id:string,user_id:string|number|undefined) => {
    const response = await API.del(`/wp-json/wp/v2/users/history/remove/${id}?user_id=${user_id}&${new Date().toString()}`);
    return response;
}