import React from "react";
import { Navbar } from "react-bootstrap";
import { Footer } from "../../Container";
import "./Loading.scss";
import LoadingIMG from "../../Assets/f606cbf26c0a18898b96ef6857953a75.gif";
export const Loading = () => {
  return (
    <div className="loader">
      <div className="images-loader">
        <img src={LoadingIMG} alt="loader" />
      </div>
    </div>
  );
};
