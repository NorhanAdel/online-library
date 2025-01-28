import React, { useEffect, useState } from 'react'
import "./Conversation.css"
import IMG from "../../Assets/IMG-20240212-WA0093.jpg"
import axios from 'axios';
export const Conversation = (conversation,currentuser) => {
  const { user, seTUser } = useState(null);
  useEffect(() => {
    const friendId = conversation.members.find(
      (user) => user !== currentuser._id
    );
    const getUser = async () => {
      try {
        const res = await axios("/user?userId" + friendId);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    }
    getUser();
  }, [currentuser, conversation]);
  return (
    <div className="conversation">
      <img className="conversationImage" src={IMG} />
      <span calssName="conversationName">Johan Deo</span>
    </div>
  );
};
