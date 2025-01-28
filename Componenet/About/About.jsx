import React from "react";
import "./About.scss";
import IMG from "../../Assets/IMG-20240207-WA0184.jpg";
export const About = () => {
  return (
    <div className="about_page">
      <div className="about_container _container">
        <div className="about_left_page">
          <h1>welcome to the library</h1>
          <span className="sub-heading"></span>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
            neque dolorem mollitia? Corporis modi, vel ex, doloribus id natus
            harum repellat itaque aperiam qui repudiandae incidunt distinctio
            voluptate cum tempore, neque dolorem mollitia? Corporis modi, vel
            ex, doloribus id natus harum repellat itaque aperiam qui repudiandae
            incidunt distinctio voluptate cum tempore neque dolorem mollitia?
            Corporis modi, vel ex, doloribus id natus harum repellat itaque
            aperiam qui repudiandae incidunt distinctio voluptate cum tempore,
            neque dolorem mollitia? Corporis modi, vel ex, doloribus id natus
            harum repellat itaque aperiam qui repudiandae incidunt distinctio
            voluptate cum tempore.
          </p>
          <button className="btn">read more</button>
        </div>
        <div className="about_right_page">
          <img src={IMG} alt="about" />
        </div>
      </div>
    </div>
  );
};
