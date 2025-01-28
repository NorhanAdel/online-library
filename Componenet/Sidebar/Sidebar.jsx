import { useState } from "react";
import { useEffect } from "react";
import "./Sidebar.scss";
import { BiStar, BiSolidStar } from "react-icons/bi";
import { sidebar2, sidebar3 } from "../../Conestants";
import { condition } from "../../Conestants/sidebar";

export const Sidebar = () => {
  return (
    <div className="_sidebar1_wrapper">
      <div className="Sidebar1_container _container">
        <div className="items">
          <h1>Category</h1>
          <span className="sub-heading"></span>
          <ul>
            {[].map((item, i) => {
              return (
                <li
                  key={i}
                  onClick={() => {
                  }}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="items">
          <h1>Brand</h1>
          <span className="sub-heading"></span>
          <ul>
            {sidebar2.map((item, i) => {
              return (
                <li key={i}>
                  <input type="checkbox" /> <span>{item}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="items">
          <h1>type of your search</h1>
          <span className="sub-heading"></span>
          <ul>
            {sidebar3.map((item, i) => {
              return (
                <li key={i}>
                  <input type="checkbox" /> <span>{item}</span>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="items">
          <h1>Condition</h1>
          <span className="sub-heading"></span>
          <ul className="condition">
            {condition.map((item) => {
              return (
                <li>
                  <fieldset>
                    <input type="radio" />
                    <span>{item}</span>
                  </fieldset>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="items">
          <h1>Rating</h1>
          <span className="sub-heading"></span>
          <input type="checkbox" />
          {[1, 2, 3, 4, 5].map((item) => {
            return <BiSolidStar />;
          })}
          <div className="sideIcon">
            <input type="checkbox" />
            {[1, 2, 3, 4].map((item) => {
              return <BiSolidStar />;
            })}
            <span>
              {[1].map((item) => {
                return <BiStar />;
              })}
            </span>
          </div>

          <div className="sideIcon">
            <input type="checkbox" />
            {[1, 2, 3].map((item) => {
              return <BiSolidStar />;
            })}
            <span>
              {[1, 2].map((item) => {
                return <BiStar />;
              })}
            </span>
          </div>
          <div className="sideIcon">
            <input type="checkbox" />
            {[1, 2].map((item) => {
              return <BiSolidStar />;
            })}
            <span>
              {[1, 2, 3].map((item) => {
                return <BiStar />;
              })}
            </span>
          </div>
          <div className="sideIcon">
            <input type="checkbox" />
            {[1].map((item) => {
              return <BiSolidStar />;
            })}
            <span>
              {[1, 2, 3, 4].map((item) => {
                return <BiStar />;
              })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
