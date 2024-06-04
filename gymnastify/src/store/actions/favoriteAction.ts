"use client"
import * as API from "../serverApiAction/clientApis";
import { FavPaginationType } from "@/component/Favourite/FavouriteType";


export const FetchFavoritesData = async(params: FavPaginationType) => {   
    const response = await API.get(`/wp-json/wp/v2/users/favorite/`, params); 
    return response;
};

export const AddFavouriteData = async(params:FavPaginationType) => {
    const response = await API.post(`/wp-json/wp/v2/users/favorite/add/`,params);
    return response;
};

export const RemoveFavoriteData = async(params:FavPaginationType) => { 
    const response = await API.del(`/wp-json/wp/v2/users/favorite/remove/`, params);
    return response;
};

export const AddPlusWhite = async(params:FavPaginationType) => {  
    const response = await API.post(`/wp-json/wp/v2/users/watchlist/add/`,params);
    return response;
}

export const closeWatchList = async(params:FavPaginationType) => {
    const response = await API.del(`/wp-json/wp/v2/users/watchlist/remove/`, params);
    return response;
  }

