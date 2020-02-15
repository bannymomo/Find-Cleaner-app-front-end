import React, { Component } from "react";
import "./style/navigation.scss";
import cleaner from "../assets/images/cleaner.png";
class Navigation extends Component {
  render() {
    return (
      <header className="navigation">
        <img src={cleaner} alt="cleaner" />
        <button className="post">Post a task</button>
        <button className="avatar"></button>
      </header>
    );
  }
}

export default Navigation;
