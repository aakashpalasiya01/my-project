"use client"
import * as API from "../serverApiAction/clientApis";
import{PaginationType} from "@/component/BlogComponent/BlogType";

export const getBlogData = async(params:PaginationType) => { 
    const response = await API.get(`/wp-json/wp/v2/posts`,params);
    return response;
}; 