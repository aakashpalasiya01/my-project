"use client";
import { RegisteredPagination } from "@/component/Home/Register";
import * as API from "../serverApiAction/clientApis";
import { SingleClassPaginationType } from "@/component/SingleClass/RelatedClassType";

export const addFavourite = async(params:RegisteredPagination | SingleClassPaginationType) => {
    const response = await API.post(`/wp-json/wp/v2/users/favorite/add/`,params);
    return response;
  };
  
  export const removeFavorite = async(params:RegisteredPagination | SingleClassPaginationType) => { 
    const response = await API.del(`/wp-json/wp/v2/users/favorite/remove/`, params);
    return response;
  };
  
  export const addWatchList = async(params:RegisteredPagination | SingleClassPaginationType) => {  
    const response = await API.post(`/wp-json/wp/v2/users/watchlist/add/`,params);
    return response;
  }
  
  export const removeWatchList = async(params:RegisteredPagination | SingleClassPaginationType) => {
    const response = await API.del(`/wp-json/wp/v2/users/watchlist/remove/`, params);
    return response;
  }