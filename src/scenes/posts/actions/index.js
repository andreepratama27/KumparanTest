import * as types from "./actionTypes";
import { API } from "@services/APIServices";

export const addPost = data => {
  return dispatch => {
    API()
      .post("posts", JSON.stringify(data))
      .then(res => {
        dispatch({ type: types.SUCCESS_POST });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const viewPost = id => {
  return dispatch => {
    API()
      .get(`posts/${id}`)
      .then(res => {
        dispatch({ type: types.VIEW_POST, data: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const initComment = id => {
  return dispatch => {
    API()
      .get(`posts/${id}/comments`)
      .then(res => {
        dispatch({ type: types.INIT_COMMENT, data: res.data });
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const addComment = data => {
  return dispatch => {
    dispatch({ type: types.ADD_COMMENT, data });
  };
};

export const deleteComment = data => {
  return dispatch => {
    dispatch({ type: types.DELETE_COMMENT, data });
  };
};
