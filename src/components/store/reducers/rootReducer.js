import authReducer from "./autReducer";
import projectReducer from "./projectReducer";
import { combineReducers } from "redux";



const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer
});



export default rootReducer;