"use client";
import { WatchListPagination } from "@/component/WatchListComponent/WatchListType";
import * as API from "../serverApiAction/clientApis";


// export const addFavirote = async(params: WatchListPagination) => {
//     const response = await API.post(`/wp-json/wp/v2/users/favorite/add/`,params);
//     return response;
// }
// export const removeFavirote = async(params:WatchListPagination) => {
//     const response = await API.del(`/wp-json/wp/v2/users/favorite/remove/`, params);
//     return response;
// }
// export const closeWatchList = async(params:WatchListPagination) => {
//     const response = await API.del(`/wp-json/wp/v2/users/watchlist/remove/`, params);
//     return response;
// }
export const watchListClassesAction = async(params:WatchListPagination) => {
    const response = await API.get(`/wp-json/wp/v2/users/watchlist/`, params);
    return response.data.data;
}
