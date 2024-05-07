import { createStore } from "redux";
import passbookReducer from "./reducer/passbookReducer";

const store = createStore(passbookReducer);

export default store;