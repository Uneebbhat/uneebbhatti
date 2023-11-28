import { Link, useLocation } from "react-router-dom";
import React from "react";
import "./Navbar.css";
import Logo from "../../assets/logo.svg";

export default function Navbar() {
  const location = useLocation();

  return (
    <>
      <nav className="navbar flex">
        <div className="logo">
          <img src={Logo} alt="Uneeb" />
        </div>
        <div className="nav-links">
          <ul className="nav-ul flex">
            <li>
              <Link
                to="/"
                className={location.pathname === "/" ? "active" : ""}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`${location.pathname === "/about" ? "active" : ""} ${
                  location.pathname === "/about" ? "no-margin-right" : ""
                }`}
              >
                About
              </Link>
              <Link
                to="/project"
                className={`${
                  location.pathname === "/project" ? "active" : ""
                } ${location.pathname === "/project" ? "no-margin-right" : ""}`}
              >
                Projects
              </Link>
              <Link
                to="/contact"
                className={`${
                  location.pathname === "/contact" ? "active" : ""
                } ${location.pathname === "/contact" ? "no-margin-right" : ""}`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
