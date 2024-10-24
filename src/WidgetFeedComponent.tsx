import React from "react";
import AddIcon from "@mui/icons-material/Add";

interface WidgetFeedProps {
  authorAvatar?: string;
  authorName: string;
  authorAbout: string;
}

function WidgetFeedComponent({
  authorAvatar,
  authorName,
  authorAbout,
}: WidgetFeedProps) {
  return (
    <div className="feed__author__container">
      <div className="author__image__container">
        <img src={authorAvatar} alt="" />
      </div>
      <div className="author__details__container">
        <span className="author-name">{authorName}</span>
        <p>{authorAbout}</p>
        <button className="author__button">
          <AddIcon className="button-icon" />
          <span className="button-text">follow</span>
        </button>
      </div>
    </div>
  );
}

export default WidgetFeedComponent;
