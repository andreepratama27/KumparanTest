import * as types from "./actionTypes";
import { API } from "@services/APIServices";

export const initUsers = () => {
  return dispatch => {
    API()
      .get("users")
      .then(res => {
        dispatch({ type: types.INIT_USERS, data: res.data });
      })
      .catch(err => {});
  };
};

export const initPosts = () => {
  return dispatch => {
    API("posts")
      .get("posts")
      .then(res => {
        dispatch({ type: types.INIT_POSTS, data: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const initAlbums = () => {
  return dispatch => {
    API()
      .get("albums")
      .then(res => {
        dispatch({ type: types.INIT_ALBUMS, data: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const searchUser = data => {
  return dispatch => {
    dispatch({ type: types.SEARCH_USER, data });
  };
};
