import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feeds from "./Feeds";
import Widget from "./Widget";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
        <Feeds />
        <Widget />
      </div>
    </div>
  );
}

export default App;
