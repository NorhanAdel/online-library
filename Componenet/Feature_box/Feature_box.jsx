import React from "react";
import "./Feature_box.scss";
import { Link } from "react-router-dom";
import { BiHeart, BiSolidStar } from "react-icons/bi";
export const Feature_box = ({ product }) => {
  return (
    <div className="Feature_card">
      <img src={product.cover} alt="" />
      <div className="details">
        <div className="dec_feature">
          <h1>
            Authore :{" "}
            <span>
              {product.author.first_name + " " + product.author.last_name}
            </span>
          </h1>

          <p>
            Rating{" "}
            {[1, 2, 3, 4, 5].map((item) => {
              return <BiSolidStar />;
            })}
            <span>{product.rating}</span>
            <span className="order">. 150 order </span>
            <a href="/" className="shopping">
              {" "}
              . Free Shopping
            </a>
          </p>
          <p className="des">{product.plot.substr(0, 80)}</p>
          <Link to={`/features/${product.id}`} className="btn">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};
