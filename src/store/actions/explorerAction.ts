"use client";
import { Paginationtype } from "@/component/ExploreComponent/Explorer";
import * as API from "../serverApiAction/clientApis";

export const explorerPageClasses = async (params:Paginationtype) => { 
  const response = await API.get(`/wp-json/wp/v2/class/`, params);
  return response.data.data;
};

export const exploreSkill = async () => { 
  const response = await API.get(`/wp-json/wp/v2/group/?orderby=id&order=desc`);
  return response;
};

export const explorerPageTopBanner = async() =>{
    const response = await API.get("/wp-json/wp/v2/banner?banner_name=subscribe_banner_2");
    return response.data.data;
  }


export const previewClassess= async (class_id: string|undefined) => {
  const response = await API.get(`/wp-json/wp/v2/class/${class_id}/more-preview-video`);
  return response.data.data;
};
