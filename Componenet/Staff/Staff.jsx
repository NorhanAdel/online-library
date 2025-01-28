import React from "react";
import "./Staff.scss";
import IMG1 from "../../Assets/IMG-20240209-WA0026.jpg";
import IMG3 from "../../Assets/IMG-20240209-WA0025.jpg";
import IMG5 from "../../Assets/IMG-20240209-WA0030.jpg";

import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoTwitter,
} from "react-icons/bi";
export const Staff = () => {
  return (
    <div className="staff_page">
      <div className="staff_container _container">
        <h1>Meet our Staff</h1>
        <span className="sub-heading"></span>
        <p>Lorem ipsum dolor, sit amet consectetur adipisi</p>
        <div className="data">
          <div className="item">
            <img src={IMG1} className="first" alt="" />
          </div>
          <div className="item ">
            <div className="white">
              <div className="info">
                <span>Nourhan Adel </span>

                <div>
                  <a href="">
                    <BiLogoFacebook />
                  </a>
                  <a href="">
                    <BiLogoTwitter />
                  </a>
                  <a href="">
                    <BiLogoLinkedin />
                  </a>
                  <a href="">
                    <BiLogoInstagram />
                  </a>
                </div>
              </div>

              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
                unde, officiis minus sunt aspernatur quia saepe, corporis nobis
              </p>
              <a href="" className="btn">
                Read more
              </a>
            </div>
          </div>
          <div className="item tree">
            <img src={IMG3} alt="" />
          </div>
          <div className="item ">
            <div className="orange">
              <div className="info">
                <span>Nourhan Adel </span>

                <div>
                  <a href="">
                    <BiLogoFacebook />
                  </a>
                  <a href="">
                    <BiLogoTwitter />
                  </a>
                  <a href="">
                    <BiLogoLinkedin />
                  </a>
                  <a href="">
                    <BiLogoInstagram />
                  </a>
                </div>
              </div>

              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
                unde, officiis minus sunt aspernatur quia saepe, corporis nobis
              </p>
              <a href="" className="btn">
                Read more
              </a>
            </div>
          </div>
          <div className="item">
            <img src={IMG5} className="first" alt="" />
          </div>
          <div className="item  ">
            <div className="white">
              <div className="info">
                <span>Nourhan Adel </span>

                <div>
                  <a href="">
                    <BiLogoFacebook />
                  </a>
                  <a href="">
                    <BiLogoTwitter />
                  </a>
                  <a href="">
                    <BiLogoLinkedin />
                  </a>
                  <a href="">
                    <BiLogoInstagram />
                  </a>
                </div>
              </div>

              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
                unde, officiis minus sunt aspernatur quia saepe, corporis nobis
              </p>
              <a href="" className="btn">
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
