import "./FeedOption.css";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";

interface FeedOptionProps {
  Icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  title: string;
  color: string;
  classLabel?: boolean;
  sendClass?: boolean;
}

export const FeedOption = ({
  Icon,
  title,
  color,
  classLabel,
  sendClass,
}: FeedOptionProps) => {
  return (
    <div className="share__box">
      <div className={`icon__container ${sendClass && "send__icon"}`}>
        {Icon && <Icon style={{ color: color }} className="share__box__icon" />}
      </div>
      <p className={`${classLabel && "reaction__text"}`}>{title}</p>
    </div>
  );
};
