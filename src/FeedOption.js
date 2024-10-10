import React from "react";
import "./FeedOption.css";

export const FeedOption = ({ Icon, title, color }) => {
  return (
    <div className="share__box">
      {Icon && <Icon style={{ color: color }} className="share__box__icon" />}
      <p>{title}</p>
    </div>
  );
};
