import { combineReducers } from "redux";
import { taskReducer } from "./taskReducer";


 const reducers = combineReducers({
    allTasks: taskReducer,
});

export default reducers;