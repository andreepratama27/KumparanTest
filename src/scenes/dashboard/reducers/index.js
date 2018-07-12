import * as types from "@scenes/dashboard/actions/actionTypes";

const initialState = {
  users: [],
  posts: [],
  albums: []
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case types.INIT_USERS: {
      return Object.assign({}, state, {
        users: action.data
      });
    }

    case types.INIT_POSTS: {
      return Object.assign({}, state, {
        posts: action.data
      });
    }

    case types.INIT_ALBUMS: {
      return Object.assign({}, state, {
        albums: action.data
      });
    }

    case types.SEARCH_USER: {
      let updatedUsers = state.users;
      updatedUsers = updatedUsers.filter(
        v => v.name.toLowerCase().search(action.data.toLowerCase()) !== -1
      );

      return Object.assign({}, state, {
        users: updatedUsers
      });
    }

    default: {
      return state;
    }
  }
};

export default reducers;
