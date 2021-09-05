import * as types from "../types";

export const allPosts = () => async (dispatch) => {
  await fetch("http://localhost:3000/api/listings").then((response) =>
    response.json().then((res) =>
      dispatch({
        type: types.ALL_POSTS,
        payload: res,
      })
    )
  );
};
