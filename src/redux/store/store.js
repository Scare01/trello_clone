import { createStore } from "redux";
import rootReducer from "../reducers/index";
import { root } from "postcss-selector-parser";

let store = createStore(rootReducer);

export default store;
