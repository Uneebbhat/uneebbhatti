import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import linkedin from "../../assets/linkedin.svg";
import mail from "../../assets/mail.svg";
import github from "../../assets/github.svg";

export default function Footer() {
  return (
    <>
      <footer className="footer-section">
        <div className="footer-wrapper">
          <div className="images">
            <Link
              to="https://www.linkedin.com/in/uneeb-bhatti-4194b4224/"
              target="_blank"
            >
              <img src={linkedin} alt="Facebook" />
            </Link>
            <Link to="https://www.instagram.com/_uneeb_15/" target="_blank">
              <img src={mail} alt="Instagram" />
            </Link>
            <Link to="https://github.com/Uneebbhat" target="_blank">
              <img src={github} alt="Github" className="github" />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
