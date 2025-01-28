import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import "./Result.scss";
import { Link } from "react-router-dom";
import { searchbook } from "../../store/reducer/dataSlice";
import { Navdetils, Rating } from "../../Componenet";

export const Result = () => {
  const { title } = useParams();
  const dispatch = useDispatch();
  const { result } = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(searchbook(title));
    return () => {};
  }, [title, dispatch]);
  console.log(result);

  return (
    <div>
      <Navdetils />
      <div className="resultpage _container">
        <h1>Search Result</h1>
        <span className="sub-heading"></span>
        <div className="bookscard">
          {result.map((book) => {
            return (
              <Link
                to={`/book-details/${encodeURIComponent(
                  book.volumeInfo.title
                )}`}
                key={book.id}
              >
                <div className="bookcard">
                  <img
                    src={book.volumeInfo.imageLinks?.thumbnail}
                    alt={book.volumeInfo.title}
                  />
                  <h3>{book.volumeInfo.title.slice(0, 30)}</h3>

                  {/* <a href={book.volumeInfo.pdf?.acsTokenLink} download>
                  <BiDownload />
                </a> */}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
