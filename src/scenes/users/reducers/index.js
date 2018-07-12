import * as types from "@scenes/users/actions/actionTypes";

const initialState = {
  oneUser: [],
  userPosts: [],
  userAlbums: [],
  userPhotos: []
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

    case types.INIT_ALBUM_USER: {
      return Object.assign({}, state, {
        userAlbums: action.data
      });
    }

    case types.INIT_PHOTO_USER: {
      return Object.assign({}, state, {
        userPhotos: action.data
      });
    }

    case types.DELETE_POSTS_USER: {
      // let findData = state.userPosts.filter(v => v.id !== action.data.idUser);
      let findUser = state.userPosts.filter(v => {
        return v.userId !== action.data.idUser;
      });

      let findPost = findUser.filter(v => v.id !== action.data.id);

      return Object.assign({}, state, {
        userPosts: findPost
      });
    }

    default: {
      return state;
    }
  }
};

export default reducers;
