import React from "react";
import { Link } from "react-router-dom";
import { links } from "../../Conestants";
import "./BootomFooter.scss";
export const BootomFooter = () => {
  return (
    <div className="bottomfooter">
      <div className="bottomfootercontainer _container">
        <p>© 2024LIBRARY All Right Reserved. </p>
        <ul className="bootomlink">
          {links.map((item) => {
            return (
              <li key={item.href}>
                <Link to={`/${item.href}`}>{item.lin}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
