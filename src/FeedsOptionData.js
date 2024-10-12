import ImageIcon from "@mui/icons-material/Image";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArticleIcon from "@mui/icons-material/Article";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import CommentIcon from "@mui/icons-material/Comment";
import RepeatIcon from "@mui/icons-material/Repeat";
import SendIcon from "@mui/icons-material/Send";

export const feedOptions = [
  {
    icon: ImageIcon,
    title: "Media",
    color: "#378fe9",
  },
  {
    icon: CalendarMonthIcon,
    title: "Event",
    color: "#c37d16",
  },
  {
    icon: ArticleIcon,
    title: "Write article",
    color: "#e06847",
  },
];

export const reactionOptions = [
  {
    icon: ThumbUpOffAltIcon,
    title: "Like",
    color: "#000000bf",
  },
  {
    icon: CommentIcon,
    title: "Comment",
    color: "#000000bf",
  },
  {
    icon: RepeatIcon,
    title: "Repost",
    color: "#000000bf",
  },
  {
    icon: SendIcon,
    title: "Send",
    color: "#000000bf",
    sendClass: "send-icon",
  },
];
