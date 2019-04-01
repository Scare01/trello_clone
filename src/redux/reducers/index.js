import { combineReducers } from "redux";
import boards from "./boards";
import tasks from "./tasks";

let rootReducer = combineReducers({ boards, tasks });

export default rootReducer;
