import React from "react";

import "./SecondFooter.scss";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoTelegram,
  BiLogoTwitter,
  BiLogoYoutube,
  BiSolidMessage,
} from "react-icons/bi";

import { catfooter, footerlinks } from "../../Conestants";
export const SecondFooter = () => {
  return (
    <div className="secondfooter">
      <div className="secondcontainer _container">
        <div className="firstpart">
          <h1 className="heading">Aboulibrary</h1>
          <span className="sub-heading"></span>
          <p className="footerdesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            velit est laboriosam ullam quisquam hic dolorum illum, ea totam
            voluptates iusto dolor, nihil quo corrupti dolores ex eum non esse?
          </p>
          <p className="emailicon">
            <BiSolidMessage /> supportemail@gmail.com.
          </p>
          <p className="emailicon">
            <BiLogoTelegram /> supporteam.
          </p>
        </div>
        <div className="secondpart">
          <h1 className="heading">quicklinks</h1>
          <span className="sub-heading"></span>
          <div>
            {footerlinks.map((item, i) => {
              return (
                <ul key={i}>
                  <li>
                    <a href="/">.{item}</a>
                  </li>
                </ul>
              );
            })}
          </div>
        </div>
        <div className="thirdpart">
          <h1 className="heading">category</h1>
          <span className="sub-heading"></span>
          <div>
            {catfooter.map((item, i) => {
              return (
                <ul key={i}>
                  <li>
                    <a href="/">.{item}</a>
                  </li>
                </ul>
              );
            })}
          </div>
        </div>
        <div className="fourhpart">
          <h1 className="heading">Fllow Us</h1>
          <span className="sub-heading"></span>
          <p>join to our comunity </p>
          <div className="footer_icon">
            <BiLogoFacebook />
            <BiLogoTwitter />
            <BiLogoLinkedin />
            <BiLogoInstagram />
            <BiLogoYoutube />
          </div>
        </div>
      </div>
    </div>
  );
};
