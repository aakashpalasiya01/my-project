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


// export const addHomePageFavouriteData = async(params:RegisteredPagination) => {
//   const response = await API.post(`/wp-json/wp/v2/users/favorite/add/`,params);
//   return response;
// };

// export const removeHomePageFavoriteData = async(params:RegisteredPagination) => { 
//   const response = await API.del(`/wp-json/wp/v2/users/favorite/remove/`, params);
//   return response;
// };

// export const addHomePageWatchList = async(params:RegisteredPagination) => {  
//   const response = await API.post(`/wp-json/wp/v2/users/watchlist/add/`,params);
//   return response;
// }

// export const removeHomePageWatchList = async(params:RegisteredPagination) => {
//   const response = await API.del(`/wp-json/wp/v2/users/watchlist/remove/`, params);
//   return response;
// }


