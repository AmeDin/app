import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";
import resaleReducer from "./resaleReducer";

export default combineReducers({
  error: errorReducer,
  auth: authReducer,
  resale: resaleReducer,
});
