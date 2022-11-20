import React from "react";
import { Link } from "react-router-dom";

export default class Navbar extends React.Component {
  render() {
    return (
      <div className="hero">
        <div className="menu-wrapper">
          <div className="nav-litem">
            <a href="#kotakt">Kontakt</a>
          </div>
        </div>
        <div className="hero-one"></div>
        {/* <div className="hero-two"></div> */}
        <div className="header-title">
          <div className="header-primary">Usługi remontowo Budowlane</div>
          <hr className="divider" />
          <span className="header-sub">Kamil Gill</span>
        </div>
      </div>
    );
  }
}
