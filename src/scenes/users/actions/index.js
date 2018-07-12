import * as types from "./actionTypes";
import { API } from "@services/APIServices";

export const initOneUser = id => {
  return dispatch => {
    API()
      .get(`users/${id}`)
      .then(res => {
        dispatch({ type: types.INIT_ONE_USER, data: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const initPostsUser = id => {
  return dispatch => {
    API()
      .get(`posts?userId=${id}`)
      .then(res => {
        dispatch({ type: types.INIT_POSTS_USER, data: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const initAlbumUser = id => {
  return dispatch => {
    API()
      .get(`albums?userId=${id}`)
      .then(res => {
        dispatch({ type: types.INIT_ALBUM_USER, data: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const initPhotoUser = id => {
  return dispatch => {
    API()
      .get(`photos?albumId=${id}`)
      .then(res => {
        dispatch({ type: types.INIT_PHOTO_USER, data: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };
};
