import React from 'react'
import "./ChatOnline.css"
import IMG from "../../Assets/IMG-20240209-WA0028.jpg"
export const ChatOnline = ()=> {
  return (
    <div className="chatOnline">
      <div className="chatOnlineFreinds">
        <div className="chatOnlineImageContainer">
          <img src={IMG} className="chatOnlineImage" />
          <div className="cahtOnlinepage"></div>
        </div>
        <span className="chatOnlineName">Johan</span>
      </div>
     
    </div>
  );
}
