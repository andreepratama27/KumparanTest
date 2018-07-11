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
