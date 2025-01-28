import React from "react";
import { TopHeader, Hero, SearchBox } from "../../Componenet";
import "./Header.scss";

export const Header = () => {
  return (
    <div className="_header">
      <div className="overlay"></div>
      <TopHeader />
      <Hero />
      <div className="searchpostion">
        <SearchBox />
      </div>
    </div>
  );
};
