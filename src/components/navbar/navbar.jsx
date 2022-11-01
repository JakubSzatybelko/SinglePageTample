import React from "react";
import { Link } from "react-router-dom";

export default class Navbar extends React.Component {
  render() {
    return (
<div className='hero'>
  <div className='menu-wrapper'>
    <div className='nav-litem'>showcase</div>
    <div className='nav-litem'>contact</div>
  </div>
  <div className="hero-one"></div>
  <div className="hero-two"></div>
  <div className="header-title"><div className="header-primary">Usługi remontowo Budowlane</div><span className="header-sub">Kamil Gill</span></div>
</div>
    );
  }
}
