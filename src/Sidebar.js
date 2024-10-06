import React from "react";
import "./Sidebar.css";
import Avatar from "@mui/material/Avatar";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import GroupsIcon from "@mui/icons-material/Groups";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <div className="sidebar__author">
          <img src="" alt="" />
          <Avatar className="sidebar__avatar" />
          <p>Emmanuel Damilola</p>
        </div>
        <div className="sidebar__stats">
          <div className="sidebar__stat">
            <p>Profile viewers</p>
            <p>100</p>
          </div>
          <div className="sidebar__stat">
            <p>Post impressions</p>
            <p>150</p>
          </div>
        </div>
      </div>

      <div className="sidebar__bottom">
        <div className="sidebar__recent">
          <p>Recent</p>
          <div className="sidebar__recent__highlights">
            <div className="recent__highlight">
              <AutoStoriesIcon />
              <p>title</p>
            </div>
            <div className="recent__highlight">
              <GroupsIcon />
              <p>title</p>
            </div>
          </div>
        </div>
        <div className="sidebar__recent">
          <p>Groups</p>
          <div className="sidebar__recent__highlights">
            <div className="recent__highlight recent__highlight__first">
              <GroupsIcon />
              <p>title</p>
            </div>
            <div className="recent__highlight">
              <GroupsIcon />
              <p>title</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
