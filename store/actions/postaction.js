import * as types from "../types";

export const startLimit = 0;
export const endLimit = 20;

export const fetchposts = () => async (dispatch) => {
  await fetch("http://localhost:3000/api/listings").then((response) =>
    response.json().then((res) =>
      dispatch({
        type: types.GET_POSTS,
        payload: res.slice(startLimit, endLimit),
      })
    )
  );
};
