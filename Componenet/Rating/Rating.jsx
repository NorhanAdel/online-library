import React, { useState, useEffect } from "react";
import { BiSolidStar } from "react-icons/bi";

export const Rating = ({ bookId, currentRating, onUpdateRating }) => {
  const [rating, setRating] = useState(currentRating);
  useEffect(() => {
    setRating(currentRating);
  }, [currentRating]);

  const handleClick = (value) => {
    console.log("Clicked rating:", value);
    setRating(value);
    onUpdateRating(bookId, value);
  };

  return (
    <div className="bookrating">
      {[...Array(5)].map((_, index) => {
        const ratingvalue = index + 1;
        return (
          <BiSolidStar
            key={index}
            onClick={() => handleClick(ratingvalue)}
            fill={ratingvalue <= rating ? "#EA6C39" : "#ddd"}
            size={20}
            style={{ cursor: "pointer" }}
          />
        );
      })}
    </div>
  );
};
