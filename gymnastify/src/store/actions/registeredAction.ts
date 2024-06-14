"use client";
// import { RegisteredPagination } from "@/component/Home/Register";
import * as API from "../serverApiAction/clientApis";
import * as registerReducer from '../reducers/registeredReducer'
import { AppDispatch } from "../store";



export const registerPageUserSkills=(id: string | number) => async(dispatch: AppDispatch) => {
    const response = await API.get(`/wp-json/wp/v2/skill_dictionary/?user_id=${id}&${new Date().toString()}`);
    dispatch(registerReducer.setRegisterlevels(response.data.data));
    return response.data.data;
}





export const registeredClasses  = (params:any) => async(dispatch: AppDispatch) =>  {
    const response = await API.get(`/wp-json/wp/v2/class/`, params);
    dispatch(registerReducer.setRegisterClasses(response.data.data.classes));
    return response.data.data;
};
  



export const RegisterPageTopBanner = () => async(dispatch: AppDispatch) =>  {
    const response = await API.get("/wp-json/wp/v2/banner?banner_name=subscribe_banner_2");
    dispatch(registerReducer.setRegisterbanner(response.data.data));
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


