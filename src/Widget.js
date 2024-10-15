import React from "react";
import "./Widget.css";
import InfoIcon from "@mui/icons-material/Info";
import WidgetFeedComponent from "./WidgetFeedComponent";
import { widgetFeedProps } from "./WidgetData";

function Widget() {
  return (
    <div className="widget__container">
      <div className="widget__container__top">
        <div className="top__header">
          <h2>Add to your feed</h2>
          <span>
            <InfoIcon />
          </span>
        </div>
        <div className="feed__list">
          {widgetFeedProps.map((prop, index) => (
            <WidgetFeedComponent
              key={index}
              authorAvatar={prop.authorAvatar}
              authorName={prop.authorName}
              authorAbout={prop.authorAbout}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Widget;
