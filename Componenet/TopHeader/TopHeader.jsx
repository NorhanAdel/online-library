import React, { useState } from "react";
import { Link } from "react-router-dom";
import IMG from "../../Assets/04.02.2024_18.31.07_REC.png";
import { links } from "../../Conestants";
import "./TopHeader.scss";
import { useDispatch, useSelector } from "react-redux";

import { BiLogOutCircle, BiMenu } from "react-icons/bi";
export const TopHeader = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { isAuthenticated } = useSelector((state) => state.authentication);
  const handleLogout = () => {
    // Perform the logout logic here
    // Set isLoggedIn state to false
    setIsLoggedIn(false);
  };

  const [sidebarIsActive, setActive] = useState(false);
  if (sidebarIsActive) {
    document.body.classList.add("hidden");
  } else {
    document.body.classList.remove("hidden");
  }
  return (
    <div className="top_header">
      <div className="top_container  _container">
        <a href="##" className="brand">
          <img src={IMG} alt="logo" />
        </a>
        <ul>
          {links.map((item) => {
            return (
              <Link to={`/${item.href}`} key={item.href}>
                {item.lin}
              </Link>
            );
          })}
        </ul>

        {sidebarIsActive && (
          <div className="overlay" onClick={() => setActive(false)}></div>
        )}
        {sidebarIsActive && (
          <nav className="side-bar">
            <div className="comp">
              <Link to="/">
                <div className="brand">
                  <img src="" alt="" />
                  <h1>اسم الموقع</h1>
                </div>
              </Link>
              <div className="icon-container" onClick={() => setActive(false)}>
                <BiLogOutCircle />
              </div>
            </div>

            {links.map((navLink, i) => (
              <Link
                key={navLink.lin + i}
                className="sidebar-link"
                to={`/${navLink.href}`}
                onClick={() => setActive(false)}
              >
                {navLink.lin}
              </Link>
            ))}
          </nav>
        )}

        <div className="registeration">
          {isAuthenticated ? (
            <>
              <button onClick={handleLogout} className="logout">
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
