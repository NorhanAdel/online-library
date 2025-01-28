import React from 'react'
import "./Message.css"
import IMG from "../../Assets/River-inspired Japanese library becomes a favorite meeting point for kids.jfif";
export const  Message  = ({own}) =>{
  return (
    <div className={own ? "messge own":"messge"}>
      <div className="messagingTop">
        <img src={IMG} className="messgeImge" />
        <p className="messgeText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, modi
          itaque. Error laboriosam ad voluptate adipisci natus ipsa, iste eos
           
        </p>
      </div>
      <div className="messgeBottom">
        <p>1hours</p>
      </div>
    </div>
  );
}

 