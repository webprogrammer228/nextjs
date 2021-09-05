import { useDispatch, useSelector } from "react-redux";
import { allPosts } from "../store/actions/allpostaction";
import { useEffect } from "react";
import { endLimit } from "../store/actions/postaction";
import { useRouter } from "next/dist/client/router";
import * as types from "../store/types.js";

export default function Pagination() {
  const dispatch = useDispatch();
  const { allposts } = useSelector((state) => state.allpost);
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allposts.length / endLimit); i++) {
    pageNumbers.push(i);
  }

  useEffect(() => dispatch(allPosts()), []);

  function changePage(page) {
    const currentPage = allposts.slice(endLimit * page - 20, endLimit * page);
    return dispatch({
      type: types.GET_POSTS,
      payload: currentPage,
    });
  }
  return (
    <div>
      <ul>
        <li>
          {pageNumbers.length ? (
            pageNumbers.map((elem) => (
              <button
                className="pagination__button"
                key={elem}
                onClick={() => changePage(elem)}
              >
                {elem}
              </button>
            ))
          ) : (
            <h1>Loading...</h1>
          )}
        </li>
      </ul>
    </div>
  );
}
