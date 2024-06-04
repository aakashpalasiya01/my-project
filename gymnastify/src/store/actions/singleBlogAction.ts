"use client"
import * as API from "../serverApiAction/clientApis";
import { RelatedBlogPagination } from "@/component/SingleBlogComponent/singleBlogType";

export const getSingleBlogData = async(blogId:string) => { 
    const response = await API.get(`/wp-json/wp/v2/posts/${blogId}`);
    return response;
}; 

export const getRelatedBlogsData = async(params:RelatedBlogPagination) => {
    const response = await API.get(`/wp-json/wp/v2/posts/`,params);
    return response;
}