import React, { useState } from "react";
import "./PostCard.scss";
import { BiSolidMessage } from "react-icons/bi";
export const PostCard = ({ img,  desc, postimg }) => {
  const [commentsIsOpen, setCommentsOpen] = useState(false);
  return (
    <div className="postcard">
      <div className="pepoleimg">
        <div>
          
          {/* <p className="name">{name.slice(0,1)}</p> */}
        </div>
        <button className="btn">Connect +</button>
      </div>
      <p className="postdesc">{desc}</p>
      <div>
        <img src={postimg} />
      </div>
      <div className="wrapper">
        <div style={{ margin: "1rem 0" }}>
          <BiSolidMessage onClick={() => setCommentsOpen((prev) => !prev)} />
        </div>
        <div className="comments-container">
          <div className="commit">
            <input type="text" placeholder="Comment" />
            <button className="btn">comment</button>
          </div>
        </div>
      </div>
      {!commentsIsOpen && (
        <div className="comments">
          {[0].map((comment) => (
            <div className="singlecommint">
              <img src={comment.src} alt="" />
              <p>{comment.value}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
