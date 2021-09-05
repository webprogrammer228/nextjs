import { combineReducers } from "redux";
import { allPostReducer } from "./allPostReducer";
import { postReducer } from "./postReducer";

export default combineReducers({
  post: postReducer,
  allpost: allPostReducer,
});
