import React from "react";
import "./Feeds.css";
import authorImage from "../src/assets/images/author.jpg";
import { feedOptions } from "./FeedsOptionData";
import { FeedOption } from "./FeedOption";

function Feeds() {
  return (
    <div className="feeds__container">
      <div className="feed__entry">
        <div className="top__container">
          <div className="author__writing__container">
            <img src={authorImage} alt="" />
          </div>
          <input type="text" placeholder="Start a post" />
        </div>
        <div className="bottom__container">
          {feedOptions.map((option, index) => (
            <FeedOption
              key={index}
              color={option.color}
              Icon={option.icon}
              title={option.title}
            />
          ))}
        </div>
      </div>

      <div className="post__container">post container</div>
    </div>
  );
}

export default Feeds;
