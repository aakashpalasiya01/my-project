"use client";
import * as homeReducer from "../reducers/homeReducer";
import * as API from "../../../src/store/serverApiAction/clientApis";

export const guestHome = () => async (dispatch: any) => {
  const response = await API.get("/wp-json/wp/v2/pages?slug=guest-home");
  dispatch(homeReducer.setGuest(response.data));
  return response.data;
};
export const whatWeOffer = () => async (dispatch: any) => {
  const response = await API.get("/wp-json/wp/v2/theme-setting/what_we_offer");
  dispatch(homeReducer.setWhatWeOffer(response.data));
  return response.data;
};
export const testimonials = () => async (dispatch: any) => {
  const response = await API.get("/wp-json/wp/v2/users_testimonial");
  dispatch(homeReducer.setTestimonials(response.data));
  return response.data;
};
export const needExpertGuidance = () => async (dispatch: any) => {
  const response = await API.get( "/wp-json/wp/v2/banner?banner_name=subscribe_banner_1");
  dispatch(homeReducer.setneedExpertGuidance(response.data));
  return response.data;
};

export const assignments = () => async (dispatch: any) => {
  const response = await API.get("/wp-json/wp/v2/banner?banner_name=learning_banner");
  dispatch(homeReducer.setassignment(response.data));
  return response.data;
};