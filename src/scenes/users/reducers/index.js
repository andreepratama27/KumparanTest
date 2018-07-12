import * as types from "@scenes/users/actions/actionTypes";

const initialState = {
  oneUser: [],
  userPosts: []
};

const reducers = (state = [], action) => {
  switch (action.type) {
    case types.INIT_ONE_USER: {
      return Object.assign({}, state, {
        oneUser: action.data
      });
    }

    case types.INIT_POSTS_USER: {
      return Object.assign({}, state, {
        userPosts: action.data
      });
    }

    default: {
      return state;
    }
  }
};

export default reducers;
