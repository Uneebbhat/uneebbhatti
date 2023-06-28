import React from "react";
import "./Navbar.css";
import Logo from "../../assets/logo.svg";

export default function Navbar() {
  return (
    <>
      <nav className="navbar flex">
        <div className="logo">
          <img src={Logo} alt="Uneeb" />
        </div>
        <div className="nav-links">
          <ul className="nav-ul flex">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
