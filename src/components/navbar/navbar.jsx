import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="cover">
      <div className="cover-container d-flex w-100 h-100 mx-auto flex-column">
        <header className="mb-auto ">
          <nav className="navbar navbar-expand-lg bg-white">
            <div className="container-fluid ps-4">
              <a className="navbar-brand" href="#">
                <img
                  style={{ height: "100px" }}
                  src="logoDakar.png"
                  className="img-fluid"
                  alt="logo"
                />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="bi bi-list fs-4"></i>
              </button>
              <div
                className="collapse text-center navbar-collapse"
                id="navbarNavAltMarkup"
              >
                <div className="navbar-nav">
                  <a className="nav-link text-light" href="#galeria">
                    <h2 className="text-light">Galeria</h2>
                  </a>
                  <a className="nav-link" href="#kontakt">
                    <h2 className="text-light">Kontakt</h2>
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <div className="text-center">
          <h1 className="header_text_1">Sprzedaż, Dostawa i Montaż Okien</h1>
          <p className="lead header_text_2">Dakar - Darek Kołakowski</p>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
