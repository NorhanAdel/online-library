import { Feature } from "../Feature/Feature";
import { SearchBox } from "../SearchBox/SearchBox";
import { Sidebar } from "../Sidebar/Sidebar";
import "./FeaturePage.scss";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
//https://www.googleapis.com/books/v1/volumes?q=subject
export const FeaturePage = () => {

  return (
    <div className="Featurepage _container">
      <div className="faeturesearch">
        <SearchBox />
        <div className="flex">
          <Sidebar />
          <Feature />
        </div>
      </div>
    </div>
  );
};
