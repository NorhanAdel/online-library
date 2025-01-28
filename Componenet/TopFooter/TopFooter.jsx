import React from "react";
import "./TopFooter.scss";
export const TopFooter = () => {
  return (
    <div className="_top_footer_">
      <div className="_top_footer_container _container">
        <h1>Subscribe on our newsletter</h1>
        <span className="sub-heading"></span>
        <p>
          Get daily news on upcoming offers from many suppliers all over the
          world
        </p>
        <input type="email" placeholder="Enter your email" />
        <button className="btn btn-primary">Subscribe</button>
      </div>
    </div>
  );
};
