import React from "react";
import "./Product_card.scss";
 
export const Product_card = ({ product }) => {
  return (
    <div className="box_card">
      <img src={product.cover} alt="" />
      <p>{product.rating}</p>
      <h2>{product.title}</h2>
    </div>
  );
};
