import React, { useEffect } from "react";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { fetchposts } from "../../store/actions/postaction";
import Link from "next/link";
import Pagination from "../../components/pagination";
export default function Listings() {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(fetchposts());
  }, []);

  return (
    <div className="main">
      <Head>
        <title>Houses for Sales</title>
      </Head>
      <div className="header__title">
        <h2>Houses for Sale</h2>
      </div>
      <div className="container">
        {posts &&
          posts.map((item) => (
            <div className="card" key={item.id}>
              <div className="card_img">
                <Link href={`/listings/listing/${item.id}`}>
                  <img src={item.images[0]} alt="" />
                </Link>
              </div>
              <div className="card_text">
                <a>
                  <p>
                    <b>House:</b> {item.product}
                  </p>
                  <p>
                    <b>Builder:</b> {item.builder}
                  </p>
                </a>
              </div>
            </div>
          ))}
      </div>
      <Pagination></Pagination>
    </div>
  );
}
