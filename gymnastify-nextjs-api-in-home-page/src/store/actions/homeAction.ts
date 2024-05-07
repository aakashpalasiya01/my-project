"use client";
import * as API from "../serverApiAction/clientApis";
import { AppDispatch } from "../store";
import * as homeReducer from "../reducers/homeReducer";

export const guestHome = () => async (dispatch: AppDispatch) => {
  const response = await API.get("/wp-json/wp/v2/pages?slug=guest-home");
  dispatch(homeReducer.setGuesthome(response.data));
  return response.data;
};

export async function WhatWeOfferAction() {
  try {
    const response = await API.get(
      "/wp-json/wp/v2/theme-setting/what_we_offer"
    );
    if (response.success) {
      return { success: true, data: response.data };
    } else {
      console.log("WhatWeOfferAction failed: ");
      return { success: false };
    }
  } catch (error: any) {
    console.log("Error during WhatWeOfferAction action:", error.message);
    return {
      success: false,
      message: error.message || "An unknown error occurred.",
    };
  }
}

export async function NeedExpertGuidance() {
  try {
    const response = await API.get(
      "/wp-json/wp/v2/banner?banner_name=subscribe_banner_1"
    );
    if (response.success) {
      return { success: true, data: response.data };
    } else {
      console.log("HomeAPI:");
    }
  } catch (error: any) {
    console.log("Error during HomeAPI:", error.message);
    return {
      success: false,
      message: error.message || "An unknown error occurred.",
    };
  }
}
export const guestHomePageNeedExpertGuidance =
  () => async (dispatch: AppDispatch) => {
    const response = await API.get(
      "/wp-json/wp/v2/banner?banner_name=subscribe_banner_1"
    );
    dispatch(homeReducer.setExpertGuidance(response.data.data));
    return response.data;
  };

export const guestHomePageAssignment = () => async (dispatch: AppDispatch) => {
  const response = await API.get(
    "/wp-json/wp/v2/banner?banner_name=learning_banner"
  );
  dispatch(homeReducer.setAssignmentCard(response.data.data));
  return response.data;
};

export async function MaximizeGymnasticsExperience() {
  try {
    const response = await API.get(
      "/wp-json/wp/v2/banner?banner_name=subscribe_banner_2"
    );
    if (response.success) {
      return { success: true, data: response.data };
    } else {
      console.log("MaximizeGymnasticsExperience:");
    }
  } catch (error: any) {
    console.log("Error during MaximizeGymnasticsExperience:", error.message);
    return {
      success: false,
      message: error.message || "An unknown error occurred.",
    };
  }
}
export const explorerPageTopBanner = () => async (dispatch: AppDispatch) => {
  const response = await API.get(
    "/wp-json/wp/v2/banner?banner_name=subscribe_banner_2"
  );
  console.log(response.data.data);
  dispatch(homeReducer.setExploreCard(response.data.data));
  return response.data;
};

export const FQA = async () => {
  const response = await API.get("/wp-json/wp/v2/faqs/?per_page=10&page=1");
  return response.data;
};

export const guestHomePageReview = () => async (dispatch: AppDispatch) => {
  const response = await API.get("/wp-json/wp/v2/users_testimonial");
  dispatch(homeReducer.setTestimonials(response.data.data));
  return response.data;
};

// export const explorerPageClasses = async(perPage:any,activeSkill:any) =>  {
//   const response = await API.get( `/wp-json/wp/v2/class/?level_skills=${activeSkill}&page=${perPage}&per_page=${5}`);
//   return response;
// }

export async function ClasseUnique(id: any) {
  try {
    const response = await API.get(
      `/wp-json/wp/v2/class/${id}/more-preview-video`
    );
    if (response.success) {
      return { success: true, data: response.data };
    } else {
      console.log("ClasseUnique failed: ");
      return { success: false };
    }
  } catch (error: any) {
    console.log("Error during ClasseUnique action:", error.message);
    return {
      success: false,
      message: error.message || "An unknown error occurred.",
    };
  }
}

export const exploreSkill = async () => {
  const response = await API.get(`/wp-json/wp/v2/usag_level/`);
  return response;
};

// export const exploreSkillclassesFilter =  async(slug:any,perPage:any) =>  {
//   const response = await API.get(`/wp-json/wp/v2/class?usag_level=${slug}&page=${perPage}&per_page=${5}`);
//   return response;
// }

// export const exploreSkillFliter =  async(skillslug:any,perPage:any,slug:any) =>  {
//     const response = await API.get(`/wp-json/wp/v2/class/?usag_level=${slug}&level_skills=${skillslug}&page=${perPage}&per_page=${5}`);
//     return response;
// }

// export const exploreAllClassesFliter = async(skillslug:any,perPage:any) =>  {
//   const response = await API.get(`/wp-json/wp/v2/class/?level_skills=${skillslug}&page=${perPage}&per_page=${5}`);
//   return response;
// }

export async function Skilldictionary(id: any) {
  try {
    const response = await API.get(
      `/wp-json/wp/v2/skill_dictionary/?user_id=${id}`
    );
    if (response.success) {
      return { success: true, data: response.data };
    } else {
      console.log("Skilldictionary failed: ", response.message);
      return { success: false };
    }
  } catch (error: any) {
    console.log("Error during Skilldictionary action:", error.message);
    return {
      success: false,
      message: error.message || "An unknown error occurred.",
    };
  }
}

// export const registerPageClasses = async(perPage:any,activeSkill:any,levelsData:any) =>  {
//   const response = await API.get( `/wp-json/wp/v2/class/?usag_level=${levelsData}&level_skills=${activeSkill}&page=${perPage}&per_page=${5}`);
//   return response;
// }
export async function props_SingleClassPage() {
  try {
    const response = await API.get(`/wp-json/wp/v2/props/`);
    if (response.success) {
      return { success: true, data: response.data };
    } else {
      console.log("Exploreskill_Skilldictionary failed: ", response);
      return { success: false };
    }
  } catch (error: any) {
    console.log(
      "Error during Exploreskill_Skilldictionary action:",
      error.message
    );
    return {
      success: false,
      message: error.message || "An unknown error occurred.",
    };
  }
}
