"use client"
import * as API from "../serverApiAction/clientApis";

export const getSingleClassData = async(classId:string) => { 
    const response = await API.get(`/wp-json/wp/v2/classes/${classId}`);
    return response;
}; 

export const  addwatchhistorylist = async(classId:string, duration:string|number, user_id:string|number|undefined) => {
    const response = await API.post(`/wp-json/wp/v2/class/${classId}/add-video-history?watched_duration=${duration}&user_id=${user_id}`,{});
    return response;
}

export const ratingVideoAction = async(class_id:string, rating:number, user_id:string|number|undefined) => {
    const response = await API.post(`/wp-json/wp/v2/users/ratings?class_id=${class_id}&user_id=${user_id}&rating=${rating}`,{});
    return response;
}