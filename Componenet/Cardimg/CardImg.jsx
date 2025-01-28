import React from "react";
import "./Cardimg.scss";
export const CardImg = ({ img }) => {
  return (
    <div className="imgcard">
      <img src={img} alt="img" />
    </div>
  );
};
