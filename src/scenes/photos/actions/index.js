import * as types from "./actionTypes";
import { API } from "@services/APIServices";

export const initPhotoPerAlbum = id => {
  return dispatch => {
    API()
      .get(`photos?albumId=${id}`)
      .then(res => {
        dispatch({ type: types.INIT_PHOTO_PER_ALBUM, data: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };
};
