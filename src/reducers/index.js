import { combineReducers } from "redux";
import dashboard from "@scenes/dashboard/reducers/";
import users from "@scenes/users/reducers";
import posts from "@scenes/posts/reducers";
import photos from "@scenes/photos/reducers";

export default combineReducers({
  dashboard,
  user: users,
  posts,
  photos
});
