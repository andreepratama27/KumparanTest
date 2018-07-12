import * as types from "@scenes/posts/actions/actionTypes";

const initialState = {
  success: false,
  article: [],
  comments: []
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case types.SUCCESS_POST: {
      return Object.assign({}, state, {
        success: true
      });
    }

    case types.FAILED_POST: {
      return Object.assign({}, state, {
        success: false
      });
    }

    case types.VIEW_POST: {
      return Object.assign({}, state, {
        article: action.data
      });
    }

    case types.INIT_COMMENT: {
      return Object.assign({}, state, {
        comments: action.data
      });
    }

    default: {
      return state;
    }
  }
};

export default reducers;
