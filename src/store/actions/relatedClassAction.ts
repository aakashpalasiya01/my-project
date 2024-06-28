"use client"
import { SingleClassPaginationType } from "@/component/SingleClass/RelatedClassType";
import * as API from "../serverApiAction/clientApis";

export const getRelatedClassData = async(classId:string | undefined) => {
    const response = await API.get(`/wp-json/wp/v2/class/${classId}/related-classes?${new Date().getTime().toString()}`);
    return response;
};

export const singleClassAddFavourite = async(params:SingleClassPaginationType) => {
    const response = await API.post(`/wp-json/wp/v2/users/favorite/add/`,params);
    return response;
};

export const singleClassAddWatchList = async(params:SingleClassPaginationType) => { 
    const response = await API.post(`/wp-json/wp/v2/users/watchlist/add/`,params);
    return response;
}

export const singleClassRemoveWatchList = async(params:SingleClassPaginationType) => {
    const response = await API.del(`/wp-json/wp/v2/users/watchlist/remove/`, params);
    return response;
  }

export const singleClassRemoveFavorite = async(params:SingleClassPaginationType) => { 
    const response = await API.del(`/wp-json/wp/v2/users/favorite/remove/`, params);
    return response;
};
