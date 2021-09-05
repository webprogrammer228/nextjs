import * as types from "../types";

const initialState = {
  allposts: [],
  post: {},
  loading: false,
  error: null,
};

export const allPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ALL_POSTS:
      return {
        ...state,
        allposts: [...action.payload],
        post: {},
        loading: true,
        error: null,
      };

    default:
      return state;
  }
};
