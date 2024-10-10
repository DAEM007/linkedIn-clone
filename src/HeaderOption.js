import React from "react";
import "./HeaderOption.css";

function HeaderOption({ Icon, title, avatar }) {
  return (
    <div className="headerOption">
      {avatar && <img className="headerOption__avatar" src={avatar} alt="" />}
      {Icon && <Icon className="headerOption__icon" />}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
