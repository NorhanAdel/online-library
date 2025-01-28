import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { BiDownload, BiSolidStar } from "react-icons/bi";
import "./BookDetails.scss";
import {
  fetchBook,
  getBookDetails,
  searchbook,
} from "../../store/reducer/dataSlice";
import { addToShelves } from "../../store/reducer/authenticationSlice";
import IMG from "../../Assets/IMG-20240209-WA0028.jpg";
import { Navdetils, Rating } from "../../Componenet";
import { Recomended } from "../Recomended/Recomended";

export const BookDetails = () => {
  const [rating, setRating] = useState(0);
  const handleRatingUpdate = (productId, newRating) => {
    console.log(`Updating rating for product ${productId} to ${newRating}`);
    setRating(newRating);
  };
  console.log("Rendering BookDetailsPage"); // Debugging statement
  const { id } = useParams();
  const dispatch = useDispatch();
  const { book, volumeInfo, downloadLink } = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(getBookDetails({ id }));
    return () => {};
  }, [id, dispatch]);

  console.log(book);
  return (
    <div className="book_detailspage">
      <Navdetils />
      <div className="booksdetailscontainer _container">
        <div className="book_container">
          <div className="single-pro-images">
            {volumeInfo?.imageLinks && (
              <img
                src={volumeInfo?.imageLinks?.thumbnail}
                width="100%"
                height="100%"
              />
            )}
            <div className="commit">
              <img src={IMG} alt="commit" />
              <input type="text" placeholder="Comment" />
            </div>
          </div>
          <div className="single-pro-image">
            <h6>
              Home / <span>book-details</span>{" "}
            </h6>
            <h4 className="main-title">{volumeInfo?.title}</h4>
            {/* Render stars */}
            {[1, 2, 3, 4, 5].map((item, i) => {
              if (i < volumeInfo?.averageRating) {
                return <BiSolidStar fill="red" key={item} />;
              } else {
                return <BiSolidStar key={item} />;
              }
            })}
            <button
              className="btn"
              onClick={() => {
                dispatch(addToShelves(volumeInfo));
              }}
            >
              add to shelves
            </button>

            {/* Render other details */}
            <span className="number_ofpage">
              {/* pages : <span>{book?.pages}</span> */}
            </span>
            <h4>book Details</h4>
            <p>{volumeInfo?.description}</p>
            <Rating
              bookId="653fc96abcb135ac0922a0d"
              currentRating={rating}
              onUpdateRating={handleRatingUpdate}
            />
            {downloadLink && (
              <a href={downloadLink} target="_blank">
                <div className="icon-container">
                  <BiDownload />
                </div>
              </a>
            )}
          </div>
        </div>
        <div className="commints">
          {/* Render comments */}
          {/* ... */}
        </div>
      </div>
      <Recomended />
    </div>
  );
};
