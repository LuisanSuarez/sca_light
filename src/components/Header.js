import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = ({ showNav, setShowNav }) => {
  const [showMenu, setShowMenu] = useState("hide");

  useEffect(() => {
    setShowMenu("hide");
  }, [showNav]);

  const handlePointerDown = () => {
    showNav === "hide"
      ? setShowNav("show")
      : showMenu === "hide"
      ? setShowMenu("show")
      : setShowMenu("hide");
  };

  return (
    <nav
      className={`navbar ${showNav} show navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light`}
      id="ftco-navbar"
    >
      <div className="logo-img"></div>
      <div className="initials-img"></div>
      <div className="navbar-brand">
        <div
          className={`open-menu ${showMenu}`}
          onPointerDown={handlePointerDown}
        >
          <div className="div-filler"></div>
          <div className={`dropdown-hamburger ${showMenu}`}>
            <div className="navbar-option">
              <a href="#">Servicios</a>
            </div>
            <div className="navbar-option">
              <a href="#">Nosotros</a>
            </div>
            <div className="navbar-option">
              <a href="#">Blog</a>
            </div>
          </div>
        </div>
        {/* <form action="#" className="searchform order-sm-start order-lg-last">
          <div className="form-group d-flex">
            <input
              type="text"
              className="form-control pl-3"
              placeholder="Search"
            />
            <button
              type="submit"
              placeholder=""
              className="form-control search"
            >
              <span className="fa fa-search"></span>
            </button>
          </div>
        </form> */}
        <button
          className={`navbar-toggler ${showNav}`}
          type="button"
          data-toggle="collapse"
          data-target="#ftco-nav"
          aria-controls="ftco-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="fa fa-bars"></span> Menu
        </button>
        {/* <div className="collapse navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav m-auto">
            <li classNameName="nav-item">
              <Link to="/home" className="nav-link">
                Inicio
              </Link>
            </li>
            <li classNameName="nav-item">
              <Link to="/nosotros" className="nav-link">
                Sobre Nosotros
              </Link>
            </li>
            <li classNameName="nav-item">
              <Link to="/servicios" className="nav-link">
                Servicios
              </Link>
            </li>
            <li classNameName="nav-item">
              <Link to="/contacto" className="nav-link">
                Servicios
              </Link>
            </li>
            <li classNameName="nav-item">
              <Link to="/blog" className="nav-link">
                Aprende más
              </Link>
            </li>
          </ul>
        </div> */}
      </div>
    </nav>
  );
};

export default Header;
