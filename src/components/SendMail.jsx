import React from "react";
import { MdMailOutline } from "react-icons/md";

export const SendMail = () => {
  return (
    <div className="mailContainer">
      <MdMailOutline className="mailIcon" />
      <input type="email" placeholder="Enter your email" />
      <button>Notify Me</button>
    </div>
  );
};
