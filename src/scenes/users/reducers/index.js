import * as types from "@scenes/users/actions/actionTypes";

const reducers = (state = [], action) => {
  switch (action.type) {
    case types.INIT_ONE_USER: {
      return action.data;
    }

    default: {
      return state;
    }
  }
};

export default reducers;
