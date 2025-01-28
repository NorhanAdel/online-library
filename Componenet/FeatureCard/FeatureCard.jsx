import React from "react";
import "./FeatureCard.scss";
import { BiSolidStar } from "react-icons/bi";
import { BiHeart } from "react-icons/bi";

export const FeatureCard = ({ product }) => {
  return (
    <div className="feature-card">
      <div className="card-container">
        <div className="img-box">
          <img src={product.cover} alt="" />
        </div>
        <div className="text-box">
          {[1, 2, 3, 4, 5].map((item) => {
            return <BiSolidStar />;
          })}
          <span>{product.rating}</span>

          <p>{product.title.slice(0, 30)}</p>
        </div>
      </div>
    </div>
  );
};
