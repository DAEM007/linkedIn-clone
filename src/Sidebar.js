import React from "react";
import "./Sidebar.css";
import Avatar from "@mui/material/Avatar";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import GroupsIcon from "@mui/icons-material/Groups";
import banner from "../src/assets/images/banner.jpg";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <div className="sidebar__author">
          <img src={banner} alt="" />
          <Avatar className="sidebar__avatar" />
          <div className="author__bio">
            <p className="author__name">Emmanuel Damilola</p>
            <p>competitive programming | Maths</p>
          </div>
        </div>
        <div className="sidebar__stats">
          <div className="sidebar__stat">
            <p>Profile viewers</p>
            <p className="stat__figure">100</p>
          </div>
          <div className="sidebar__stat">
            <p>Post impressions</p>
            <p className="stat__figure">150</p>
          </div>
        </div>
      </div>

      <div className="sidebar__bottom">
        <div className="sidebar__recent">
          <p className="recent__title">Recent</p>
          <div className="sidebar__recent__highlights">
            <div className="recent__highlight">
              <AutoStoriesIcon />
              <p>Tech success stories: From Tech growth hub</p>
            </div>
            <div className="recent__highlight">
              <GroupsIcon />
              <p>JavaScript Developers community</p>
            </div>
          </div>
        </div>
        <div className="sidebar__recent">
          <p className="group__title">Groups</p>
          <div className="sidebar__recent__highlights">
            <div className="recent__highlight recent__highlight__first">
              <GroupsIcon />
              <p>Python Developers community</p>
            </div>
            <div className="recent__highlight">
              <GroupsIcon />
              <p>Artificial intelligence community</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
