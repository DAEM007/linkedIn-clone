import ImageIcon from "@mui/icons-material/Image";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArticleIcon from "@mui/icons-material/Article";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import CommentIcon from "@mui/icons-material/Comment";
import RepeatIcon from "@mui/icons-material/Repeat";
import SendIcon from "@mui/icons-material/Send";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";

interface FeedOptionProps {
  Icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  title: string;
  color: string;
}

interface ReactionOptionProps extends FeedOptionProps {
  classLabel?: boolean;
  sendClass?: boolean;
}

export const feedOptions: FeedOptionProps[] = [
  {
    Icon: ImageIcon,
    title: "Media",
    color: "#378fe9",
  },
  {
    Icon: CalendarMonthIcon,
    title: "Event",
    color: "#c37d16",
  },
  {
    Icon: ArticleIcon,
    title: "Write article",
    color: "#e06847",
  },
];

export const reactionOptions: ReactionOptionProps[] = [
  {
    Icon: ThumbUpOffAltIcon,
    title: "Like",
    color: "#000000bf",
    classLabel: true,
  },
  {
    Icon: CommentIcon,
    title: "Comment",
    color: "#000000bf",
    classLabel: true,
  },
  {
    Icon: RepeatIcon,
    title: "Repost",
    color: "#000000bf",
    classLabel: true,
  },
  {
    Icon: SendIcon,
    title: "Send",
    color: "#000000bf",
    classLabel: true,
    sendClass: true,
  },
];
