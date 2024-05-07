"use client"
import * as API from "../serverApiAction/clientApis";
import { FetchFavParamsType } from "@/component/Favourite/FavouriteType";


export const FetchFavoritesData = async(params: FetchFavParamsType) => {   
    const response = await API.get(`/wp-json/wp/v2/users/favorite`, params); 
    return response;
};

export const AddFavouriteData = async(user_id:string,class_id:number) => {
    const response = await API.post(`/wp-json/wp/v2/users/favorite/add?user_id=${user_id}&class_id=${class_id}`,{});
    return response;
};

export const RemoveFavoriteData = async(user_id:string,class_id:number) => { 
    const response = await API.del(`/wp-json/wp/v2/users/favorite/remove?user_id=${user_id}&class_id=${class_id}`);
    return response;
};

export const AddPlusWhite = async(class_id:number,user_id:string) => {  
    const response = await API.post(`/wp-json/wp/v2/users/watchlist/add?class_id=${class_id}&user_id=${user_id}`,{});
    return response;
}

