import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import LinkedInLogo from "../src/assets/images/linkedIn-logo.webp";
import HeaderOption from "./HeaderOption";
import { optionsData } from "./HeaderOptionData";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src={LinkedInLogo} alt="" />
        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>

      <div className="header__right">
        {optionsData.map((option, index) => (
          <HeaderOption
            key={index}
            Icon={option.icon}
            avatar={option.avatar}
            title={option.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Header;
