import React from "react";
import { Link } from "react-router-dom";

export default class Navbar extends React.Component {
  render() {
    return (
      <nav
        className={
          this.props.stick
            ? "navbar navbar-expand-lg navbar-dark bg-dark"
            : "navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
        }
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img style={{ height: "40px" }} src="/GrubyKot.png"></img>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link effect-one">
                  Home
                </Link>
                <span className="visually-hidden">(current)</span>
              </li>
              <li className="nav-item ">
                <a href="/#Ceny" className="nav-link effect-one">
                  Item
                </a>
              </li>
              <li className="nav-item dropdown ">
                <Link
                  className="nav-link dropdown-toggle effect-one"
                  data-bs-toggle="dropdown"
                  to="/"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown Menu
                </Link>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" to="/">
                    Item1
                  </Link>
                  <Link className="dropdown-item" to="/">
                    Item2
                  </Link>
                  <Link className="dropdown-item" to="/">
                    Item3
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" to="/">
                    Item4
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
