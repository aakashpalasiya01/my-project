"use client"
import * as API from "../serverApiAction/clientApis";

export const getRelatedClassData = async(classId:number) => {
    const response = await API.get(`/wp-json/wp/v2/class/${classId}/related-classes`);
    return response;
};

export const AddFavouriteData = async(user_id:string,class_id:number) => {
    const response = await API.post(`/wp-json/wp/v2/users/favorite/add?user_id=${user_id}&class_id=${class_id}`,{});
    return response;
};

export const AddPlusWhite = async(class_id:number,user_id:string) => {  
    const response = await API.post(`/wp-json/wp/v2/users/watchlist/add?class_id=${class_id}&user_id=${user_id}`,{});
    return response;
}
