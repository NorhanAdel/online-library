import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { category } from "../../Conestants"; // Assuming you meant "Constants" instead of "Conestants"
import { CardImg } from "../Cardimg/CardImg";
import "./books.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchByCategory } from "../../store/reducer/dataSlice";

export const Books = () => {
  // const { filteredBooks, status } = useSelector((state) => state.data); // Ensure "state.data" matches your Redux store structure
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchByCategory("Fiction")); // Initial fetch on component mount, adjust as needed
  // }, [dispatch]);

  // // Handle loading state
  // if (status === "loading") {
  //   return <div>Loading...</div>;
  // }

  // // Handle error state
  // if (status === "error") {
  //   return <div>Error occurred while fetching books.</div>;
  // }

  // // Render books once fetched
  return (
    <div className="books_page">
      <div className="overlay"></div>

      <div className="books_container _container">
        <h1>Welcome to the library</h1>
        <span className="sub-heading"></span>

        {/* <div className="books">
          {category.map((item, i) => (
            <button
              className="btn"
              key={i}
              onClick={() => {
                dispatch(fetchByCategory(item));
              }}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="books_imgs">
          {filteredBooks &&
            filteredBooks.map((item, i) => (
              <Link to={`/book-details/${item.title}`} key={i}>
                <CardImg img={item.cover} />
              </Link>
            ))}
        </div>*/}
      </div>  
    </div>
  );
};
