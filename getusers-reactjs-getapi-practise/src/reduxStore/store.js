import { configureStore } from "@reduxjs/toolkit";
import sliceReducer from "./reducers";
const store = configureStore({
    reducer : {
        userInfo : sliceReducer
    }
})
export default store;