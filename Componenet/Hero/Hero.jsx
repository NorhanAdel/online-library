import React from "react";
import "./Hero.scss";
export const Hero = () => {
  return (
    <div className="hero">
      <div className="_hero_des">
        <p className="_top_desc">online learning anytime, anywher! </p>
        <h1>DISCOVER YOUR ROOTS</h1>
        <p className="_bottom_desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
          praesentium? Atque at eum nihil officia voluptates nostrum officiis,
          voluptatem soluta autem ipsum!
        </p>
        <button className="btn read">READ MORE</button>
        <button className="btn purchas">PURCHASE</button>
      </div>
    </div>
  );
};
