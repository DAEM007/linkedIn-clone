import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import LinkedInLogo from "../src/assets/images/linkedIn-logo.webp";
import { optionsData } from "./HeaderOptionData";
import HeaderOption from "./HeaderOption";

function Header() {
  return (
    <div className="header">
      <div className="header__inner__wrapper">
        <div className="header__left">
          <img src={LinkedInLogo} alt="" />
          <div className="header__search">
            <SearchIcon />
            <input type="text" placeholder="Search" />
          </div>
        </div>

        <div className="header__right">
          {optionsData.map((option, index) => (
            <HeaderOption
              key={index}
              Icon={option.icon}
              avatar={option.avatar}
              title={option.title}
              classLabel={option.classLabel}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
