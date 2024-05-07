import { AppDispatch } from "../store";
import * as API from "../serverApiAction/clientApis";
import * as authReducer from "../reducers/authReducer";
import { forError, forSuccess } from "@/utils/CommonService";
import Cookies from "js-cookie";
import axios from "@/utils/axiosConfig";


export const refreshToken = async (dispatch: AppDispatch) => {
  const res: any = await API.get("/api/auth/refresh");

  if (res?.data?.accessToken) {
    Cookies.set("token", JSON.stringify(res.data.accessToken));
    dispatch(authReducer.refreshToken(res.data.accessToken));
    return res.data;
  } else if (res === "token has expired") {
    dispatch({ type: "auth/logout" });
  } else {
    dispatch({ type: "auth/logout" });
  }
  return {
    access_token: "asdasdd",
  };
};

export const login = (form: any) => async (dispatch: AppDispatch) => {
  try {
    const res = await axios.post("/auth/login", form);
    if (res.success) {
      dispatch(
        authReducer.login({ user: {}, access_token: "", refresh_token: "" })
      );
      forSuccess("Login successfully.");
    }
  } catch (error: any) {
    console.log(error);
    forError(error.message);
  }
};
