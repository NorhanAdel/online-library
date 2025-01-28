import React, { useState } from "react";
import "./Navdetails.scss";
import { links } from "../../Conestants";
import { Link } from "react-router-dom";
import IMG from "../../Assets/04.02.2024_18.31.07_REC.png";
import { useDispatch, useSelector } from "react-redux";
import { BiMenu } from "react-icons/bi";
import { signOut } from "../../store/reducer/authenticationSlice";

export const Navdetils = () => {
  const { isAuthenticated } = useSelector((state) => state.authentication);
  const [sidebarIsActive, setActive] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className="top_header">
      <div className="top_container  _container">
        <a href="#">
          <img src={IMG} alt="logo" />
        </a>
        <ul>
          {links.map((item) => {
            return (
              <Link
                to={`/${item.href}`}
                key={item.href}
                className="headers_link"
              >
                {item.lin}
              </Link>
            );
          })}
        </ul>
        <div className="registeration">
          {isAuthenticated ? (
            <>
              <button
                onClick={() => {
                  dispatch(signOut());
                }}
                className="logout"
              >
                Log out
              </button>
              <div className="icons">
                <div className="icon-container" onClick={() => setActive(true)}>
                  <BiMenu />
                </div>
              </div>
            </>
          ) : (
            <>
              <Link to="/login" className="login">
                Login
              </Link>
              <Link to="/register" className="register">
                / Register
              </Link>
              <div className="icons">
                <div className="icon-container" onClick={() => setActive(true)}>
                  <BiMenu />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
