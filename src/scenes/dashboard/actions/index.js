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
    API("albums")
      .then(res => {
        dispatch({ type: types.INIT_ALBUMS, data: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };
};
