"use client";
import { WatchListPagination } from "@/component/WatchListComponent/WatchListType";
import * as API from "../serverApiAction/clientApis";

export const watchListClassesAction = async(params:WatchListPagination) => {
    const response = await API.get(`/wp-json/wp/v2/users/watchlist/`, params);
    return response.data.data;
}
