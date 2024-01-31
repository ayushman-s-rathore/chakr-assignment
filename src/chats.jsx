import React from "react";
import "./chats.css";
import pic1 from "./assets/rectangle3.png";
import pic2 from "./assets/rectangle6.png";
import pic3 from "./assets/rectangle7.png";
import pic4 from "./assets/rectangle8.png";

export const chats = () => {
  return (
    <div className="chats">
      Chats
      <div className="unread"> 2 unread messages</div>
      <div className="friends">
        <ul className="friends-list">
          <li className="special">
            <img src={pic1} />
            <div className="red-dot"></div>
          </li>
          <li className="special">
            <img src={pic2} />
            <div className="red-dot"></div>
          </li>
          <li>
            <img src={pic3} />
          </li>
          <li>
            <img src={pic4} />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default chats;
