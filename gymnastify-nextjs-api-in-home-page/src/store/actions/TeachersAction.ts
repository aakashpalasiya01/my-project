"use client"
import { Paginationtype } from "@/component/ExploreComponent/Explorer";
import * as API from "../serverApiAction/clientApis";

export const getTeachersData = async(params:Paginationtype) => { 
    const response = await API.get(`/wp-json/wp/v2/instructors/`,params);
    return response.data.data;
}; 