"use client";
import { RegisteredPagination } from "@/component/Home/Register";
import * as API from "../serverApiAction/clientApis";

export const registerPageUserSkills = async(id: string | number) => {
    const response = await API.get(`/wp-json/wp/v2/skill_dictionary/?user_id=${id}&${new Date().toString()}`);
    return response.data.data;
}

export const registeredPageClasses  = async (params:RegisteredPagination) => { 
    const response = await API.get(`/wp-json/wp/v2/class/`, params);
    return response.data;
};
  

export const RegisterPageTopBanner = async() =>  {
    const response = await API.get("/wp-json/wp/v2/banner?banner_name=subscribe_banner_2");
    return response.data.data;
  };

  export const previewClassess= async (class_id: string|undefined) => {
    const response = await API.get(`/wp-json/wp/v2/class/${class_id}/more-preview-video`);
    return response.data.data;
  };





