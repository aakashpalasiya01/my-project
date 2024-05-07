import errorHandler from "./errorHandler";

const successHandler = (response) => {
  if (!response.data.error) return response.data;
  else {
    response.status = response.data.code;
    return errorHandler({ response })
  }
};
export default successHandler;