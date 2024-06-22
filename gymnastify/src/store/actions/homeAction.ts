"use client";
import * as API from "../serverApiAction/clientApis";
import { AppDispatch } from "../store";
import * as homeReducer from "../reducers/homeReducer";

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

export const guestHomeHeroSection = () => async (dispatch: AppDispatch) => {
  const response = await API.get("/wp-json/wp/v2/pages?slug=guest-home");
  dispatch(homeReducer.setGuesthome(response.data));
  return response.data;
};

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
  return response.data.data;
};





export const exploreSkillHome = () => async (dispatch: AppDispatch) => {
  const response = await API.get("/wp-json/wp/v2/level_skills");
  dispatch(homeReducer.setTaxonomyDetail(response.data.data));
  return response.data;
};





export const SocialIconAction = async () => {
  const response = await API.get(`/wp-json/wp/v2/theme-setting/social_follow`);
  return response.data;
};



export const NewsLetterAction = async (body: any) => {
  const response = await API.post(`/wp-json/mailchimp/v1/add`, body);
  return response;
}