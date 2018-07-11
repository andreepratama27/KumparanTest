import { combineReducers } from "redux";
import dashboard from "@scenes/dashboard/reducers/";
import users from "@scenes/users/reducers";

export default combineReducers({
  dashboard,
  user: users
});
