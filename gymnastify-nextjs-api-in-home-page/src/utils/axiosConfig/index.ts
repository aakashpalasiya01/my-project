import config from "../config";
import authInterceptor from "./interceptors/authInterceptor";
import serverErrorHandler from "./interceptors/serverErrorHandler";
import successHandler from "./interceptors/successHandler";
const axios = require('axios');

const instance = axios.create({
  baseURL: config.API_URL
});


instance.interceptors.request.use(authInterceptor, (error: any) =>
  Promise.reject(error)
);
instance.interceptors.response.use(successHandler, (error: any) => 
  serverErrorHandler(error)
);

export default instance;