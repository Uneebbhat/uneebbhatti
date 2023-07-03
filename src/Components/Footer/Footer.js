import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import fb from "../../assets/facebook.svg";
import insta from "../../assets/instagram.svg";
import reddit from "../../assets/reddit.svg";

export default function Footer() {
  return (
    <>
      <footer className="footer-section">
        <div className="footer-wrapper">
          <div className="images">
            <Link
              to="https://www.facebook.com/profile.php?id=100010313268131"
              target="_blank">
              <img src={fb} alt="Facebook" />
            </Link>
            <Link to="https://www.instagram.com/_uneeb_15/" target="_blank">
              <img src={insta} alt="Instagram" />
            </Link>
            <img src={reddit} alt="Reddit" />
          </div>
          <div className="contact">
            <a href="mailto:uneebbhatti3@gmail.com">uneebbhatti3@gmail.com</a>
          </div>
        </div>
      </footer>
    </>
  );
}
