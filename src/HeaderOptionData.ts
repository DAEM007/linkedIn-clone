import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import WorkIcon from "@mui/icons-material/Work";
import SmsIcon from "@mui/icons-material/Sms";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "../src/assets/images/avatar.JPG";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";

interface OptionDataProps {
  icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  title: string;
  avatar?: string;
  classLabel?: boolean;
}

export const optionsData: OptionDataProps[] = [
  {
    icon: HomeIcon,
    title: "Home",
  },
  {
    icon: SupervisorAccountIcon,
    title: "My Network",
  },
  {
    icon: WorkIcon,
    title: "Jobs",
  },
  {
    icon: SmsIcon,
    title: "Messaging",
  },
  {
    icon: NotificationsIcon,
    title: "Notifications",
  },
  {
    avatar: Avatar,
    title: "Me",
    classLabel: true,
  },
];
