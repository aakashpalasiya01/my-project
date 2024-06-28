"use client";
import * as API from "../serverApiAction/clientApis";
import * as registerReducer from "../reducers/registeredReducer";
import { AppDispatch } from "../store";
import { classPayLoadType } from "@/types/RegisterTypes";

export const registerPageUserSkills =
  (id: string | number) => async (dispatch: AppDispatch) => {
    const response = await API.get(
      `/wp-json/wp/v2/skill_dictionary/?user_id=${id}&${new Date().toString()}`
    );
    dispatch(registerReducer.setRegisterlevels(response.data.data));
    return response.data.data;
  };

export const registeredClasses =
  (params: classPayLoadType) => async (dispatch: AppDispatch) => {
    const response = await API.get(`/wp-json/wp/v2/class/`, params);
    dispatch(registerReducer.setRegisterClasses(response.data.data));
    debugger
    return response.data.data;
  };

export const RegisterPageTopBanner = () => async (dispatch: AppDispatch) => {
  const response = await API.get(
    "/wp-json/wp/v2/banner?banner_name=subscribe_banner_2"
  );
  dispatch(registerReducer.setRegisterbanner(response.data.data));
  return response.data.data;
};

export const previewClassess = async (class_id: string | undefined) => {
  const response = await API.get(
    `/wp-json/wp/v2/class/${class_id}/more-preview-video`
  );
  return response.data.data;
};

export const AddFavourite = async (params: classPayLoadType) => {
  const response = await API.post(`/wp-json/wp/v2/users/favorite/add/`, params);
  return response.data;
};

export const RemoveFavourite = async (params: classPayLoadType) => {
  const response = await API.del(
    `/wp-json/wp/v2/users/favorite/remove/`,
    params
  );

  return response.data;
};

export const AddWatchList = async (params: classPayLoadType) => {
  const response = await API.post(
    `/wp-json/wp/v2/users/watchlist/add/`,
    params
  );
  return response.data;
};

export const RemoveWatchList = async (params: classPayLoadType) => {
  const response = await API.del(
    `/wp-json/wp/v2/users/watchlist/remove/`,
    params
  );

  return response.data;
};
