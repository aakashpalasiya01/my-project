"use client";
import * as API from "../serverApiAction/clientApis";
export async function ProfileForm(ProfileData: FormData, id: string|number|undefined) {
    const response = await API.post(`/wp-json/wp/v2/users/profile-update/${id}`, ProfileData);
    return response;
}

export const userProfileGetData = async(id:string|number|undefined) => { 
  const response = await API.post(`/wp-json/wp/v2/users/gallery?user_id=${id}`,{});
  return response;
}//index.tsx

export async function ProfileMultiplePhoto(formData: FormData) {
  try { 
    const response = await API.post('/wp-json/wp/v2/users/gallery/new-upload', formData);
    if (response.success) {
      return { success: true, data: response.data };
    } else {
      return { success: false };
    }
  } catch (error: any) {
    return {
      success: false,
      message: error.message || "An unknown error occurred.",
    };
  }
}//index.tsx


export async function ProfileRemovePhoto(id: string|number, userId:string|number|undefined) {
  try {
    const response = await API.post(`/wp-json/wp/v2/users/gallery/remove/${id}?user_id=${userId}`,{});
    if (response.success) {
      return { success: true, data: response.data };
    } else {
      console.log("ProfileMultiplePhoto failed: ", response);
      return { success: false };
    }
  } catch (error: any) {
    console.log("Error during ProfileMultiplePhoto action:", error.message);
    return {
      success: false,
      message: error.message || "An unknown error occurred.",
    };
  }
}//KidInfo.tsx

export const GetAllProfileData = async(user_id:string) => {
    const response = await API.get(`/wp-json/wp/v2/users/profile?user_id=${user_id}`);
   return response;
}//dispatched nowhere