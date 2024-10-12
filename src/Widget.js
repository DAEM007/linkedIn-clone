import React from "react";
import "./Widget.css";
import InfoIcon from "@mui/icons-material/Info";
import AddIcon from "@mui/icons-material/Add";
import mathNerd from "../src/assets/images/math-nerd.jpg";

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
          <div className="feed__author__container">
            <div className="author__image__container">
              <img src={mathNerd} alt="" />
            </div>
            <div>
              <span>author name</span>
              <p>author about</p>
              <div className="author__details__container">
                <button>
                  <AddIcon />
                  <span>follow</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Widget;
