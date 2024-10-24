import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";
import "./HeaderOption.css";

interface HeaderOptionProps {
  Icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  title: string;
  avatar?: string;
  classLabel?: boolean;
}

function HeaderOption({ Icon, title, avatar, classLabel }: HeaderOptionProps) {
  return (
    <div className={`headerOption ${classLabel && "me"}`}>
      {avatar && <img className="headerOption__avatar" src={avatar} alt="" />}
      {Icon && <Icon className="headerOption__icon" />}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
