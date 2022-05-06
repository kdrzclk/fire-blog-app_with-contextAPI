import { combineReducers } from "redux";
import appReducer from "./appReducers";
import authReducer from "./authReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  app: appReducer,
});
