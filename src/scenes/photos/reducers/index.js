import * as types from "@scenes/photos/actions/actionTypes";

const initialState = {
  photos: []
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case types.INIT_PHOTO_PER_ALBUM: {
      return Object.assign({}, state, {
        photos: action.data
      });
    }

    default: {
      return state;
    }
  }
};

export default reducers;
