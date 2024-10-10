import React from "react";
import "./FeedOption.css";

export const FeedOption = ({ Icon, title, color, sendClass }) => {
  return (
    <div className="share__box">
      <div className={`icon__container ${sendClass && "send__icon"}`}>
        {Icon && <Icon style={{ color: color }} className="share__box__icon" />}
      </div>
      <p>{title}</p>
    </div>
  );
};
