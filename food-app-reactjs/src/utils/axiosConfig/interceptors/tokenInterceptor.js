import successHandler from "./successHandler";

const tokenInterceptor = (response) => {
    return successHandler(response);
}

export default tokenInterceptor;