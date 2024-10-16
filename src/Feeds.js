import React from "react";
import "./Feeds.css";
import authorImage from "../src/assets/images/author.jpg";
import { feedOptions, reactionOptions } from "./FeedsOptionData";
import { FeedOption } from "./FeedOption";
import authorEngineer from "../src/assets/images/author-engineer.jpg";

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

      <div className="post__container">
        <div className="author__container">
          <div className="author__image">
            <img src={authorEngineer} alt="" />
          </div>
          <div className="author__details__container">
            <span className="author__name">Jack Robert</span>
            <span className="author__about">
              Software engineer | Open Source
            </span>
          </div>
        </div>

        <div className="description__wrapper">
          <div className="border__margin">
            <span>
              This description works well Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Accusamus quae, totam molestias
              ipsam, sint non laudantium commodi necessitatibus ad, similique
              facere officia? Cupiditate rem, sunt rerum nemo minima quod omnis.
            </span>
          </div>
        </div>

        <div className="post__reactions">
          {reactionOptions.map((option, index) => (
            <FeedOption
              key={index}
              Icon={option.icon}
              title={option.title}
              color={option.color}
              classLabel={option.classLabel}
              sendClass={option.sendClass}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Feeds;
