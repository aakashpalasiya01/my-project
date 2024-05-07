"use client";
import * as API from "../serverApiAction/clientApis";
export async function ProfileForm(ProfileData: any, id: string) {
    const response = await API.post(`/wp-json/wp/v2/users/profile-update/${id}`, ProfileData);
    return response;
}

export const userProfileGetData = async(id:any) => {
  const response = await API.post(`/wp-json/wp/v2/users/gallery?user_id=${id}`,{});
  return response;
}

export async function ProfileMultiplePhoto(formData: any) {
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
}


export async function ProfileRemovePhoto(id: any, userId:any) {
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
}

export const GetAllProfileData = async(user_id:any) => {
    const response = await API.get(`/wp-json/wp/v2/users/profile?user_id=${user_id}`);
   return response;
}